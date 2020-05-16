---
title: "How to mint your own TSLA token"
date: "2020-05-18"
description: "A guide on deploying your own synthetic token to Mainnet with the UMA protocol."
thumbnail: "./testing-header.png"
---

> A token that can be traded anywhere and anytime.

Have you ever wanted to buy a share of Apple or Tesla?

Your local time, location of residence, and whether or not you have an account with a brokerage are all factors that determine whether or not you can buy a share of your favorite stock.

But what if I told you that, no matter where you are or what time it is, you can create your own ERC20 token that tracks the price of TSLA, launch it onto the Ethereum Mainnet, and trade it with other people _today_? A token that can be traded anywhere and anytime.

What follows is a general overview of how this is possible with the UMA protocol.

# How is this possible?

While we don't have access to real TSLA stocks themselves, the UMA protocol gives us the ability to basically mint any token as long as it's backed by a sufficient amount of collateral (which can be different from the underlying asset).

Sounds magical, right?

But this concept is how MakerDAO has been using ETH collateral to mint DAI (a stablecoin pegged to the USD) since 2018. Conceptually, staking ETH and minting DAI is not all that different from staking something else (like DAI, for example) and minting a TSLA token.

These are called **synthetic tokens** because you can trade them as if they were the "real thing" without requiring anyone in the system to actually buy or sell the underlying asset (as long as there's a reliable mechanism for ascertaining the price of the underlying asset and ensuring collateralization, but that's a blog post in and of itself).

For this blog post, let's assume we are attempting to mint TSLA tokens with DAI as collateral.

# Two requirements

In order to create a synthetic token with the UMA protocol, there are two things that need to be approved by UMA token holders:

1. The collateral currency, and;
2. A price identifier (for the synthetic token).

The collateral currency is the denomination of the backing collateral in our system. The approved collateral tokens are tracked by the `collateralTokenWhitelist` of the `ExpiringMultiPartyCreator` smart contract. For our example, we will use DAI.

The price identifier is an ID that refers to the source of the underlying asset's price. In our example, this will be the string `TSLA`, in reference to a price feed that tells us how much one share of TSLA is worth. The `IdentifierWhitelist` smart contract keeps track of which identifiers have been approved.

Thankfully, both of these components have been approved in our example case of TSLA tokens backed by DAI. However, if either of these desired components are not approved, then you will need to seek approval through the UMIP process.

# Getting approval via the UMIPs

UMIP stands for UMA Improvement Proposal, and it is the method in which new collateral types and price identifiers can be proposed amongst other governance decisions. This process helps ensure that there will be demonstrated community support before a change is approved.

## Proposing a new collateral currency

If the desired collateral currency has not been approved yet, you can propose an UMIP for a new contract factory template. Here is an example of such a [proposal](https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-newcontract.md).

Note that each contract factory template is tied to a specific collateral currency, so by proposing a new contract factory template, we are essentially requesting the approval of a new collateral currency.

When proposing a new collateral currency, you need to consider potential security implications. Since this collateral will be locked into the system for the minting of tokens, this can be a new source of profit for potential hackers (what we like to call Profit from Corruption, or PfC). Of course, one must also consider whether or not the collateral currency is stable enough to warrant being approved.

## Proposing a new price identifier

If your desired price identifier has not been approved yet, you can propose an UMIP to have that included. Here is an example [proposal](https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-2.md) that demonstrates adding ETHBTC as a price identifier.

The proposal for a new price identifier must be specific enough that, when under dispute, it should be easy for UMA token holders to agree on and determine its "true" price. The mechanism for resolving disputes is driven by the Data Verification Mechanism (DVM). A detailed explanation of the DVM is outside of the scope of this article.

# Launching your token

To mint a synthetic TSLA token, you'll need a token factory that can mint them from your DAI as collateral. This contract is also known as the `ExpiringMultiParty` contract. This is because the token will actually expire, more on this later.

If your desired collateral currency and price feed identifier already exists, then it's likely that the token factory already exists. And if you are happy with its parameters, you can simply create a position with that token factory.

All you need to do is call the `create` method of the token factory contract with the amount of collateral to be staked and the desired number of tokens to mint like so:

```js
await expiringMultiParty.create(
  { rawValue: collateralNeeded.toString() }, // # of DAI tokens in wei
  { rawValue: tokensToMint.toString() }, // # of TSLA tokens in wei
  { from: sponsor }
)
```

If, however, you are not happy with the parameters of the existing template or if the desired token factory does not exist yet, then you can launch your own by using the `ExpiringMultiPartyCreator` and passing in your desired parameters:

```js
const txResult = await expiringMultiPartyCreator.createExpiringMultiParty(
  constructorParams
)
const expiringMultiParty = await ExpiringMultiParty.at(
  txResult.logs[0].args.expiringMultiPartyAddress
)
```

Note that this article is not meant to be a tutorial, the code above is for illustration only. A full tutorial with a barebones working repository is in the works.

# What happens now?

Once you've minted the synthetic TSLA tokens, you can now trade them as you would trade any ERC20 token. That means you can potentially create a market for this on Uniswap or any other DEX!

## Expiry date

While a perpetual model is in the works, these tokens currently have an expiry date. If you were a token sponsor (i.e. you minted these tokens), at anytime **before expiration** you can redeem them for a proportional amount of collateral. Otherwise, **after expiration**, any token holder can redeem them for an amount of the collateral determined at expiry.

# Further considerations

There are many other further considerations to be considered. Once you create the tokens, you will need to figure out how to facilitate liquidity for its trading. Perhaps you may even create a new interface for ease of access to these tokens.

Beyond this, there are other roles to be played in the ecosystem. For example, you might want to choose to run a liquidation bot to help keep these token factories collateralized while potentially making a profit. Or you might want to run a dispute bot to facilitate governance. These will all be discussed in future blog posts.

We hope that this article demonstrates how the UMA protocol can help almost anyone produce a synthetic token. While the theme of this blog post is to mint TSLA tokens, note that it could just as well be anything else like the price of gold or even something wackier like the average temperature for a particular city.

Join us next time for a more in-depth look at some of these questions.
