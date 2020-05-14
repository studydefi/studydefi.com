---
title: "How to mint your own TSLA token"
date: "2020-05-18"
description: "A guide on deploying your own synthetic token to Mainnet with the UMA protocol."
thumbnail: "./testing-header.png"
---

> A token that can be traded anywhere and anytime.

Have you ever wanted to buy a share of Apple or Tesla?

Your local time, location of residence, and whether or not you have an account with a brokerage are all factors that determine whether or not you can buy a share of your favorite stock.

But what if I told you that, no matter where you are, you can create your own ERC20 token that tracks the price of TSLA and launch it onto the Ethereum Mainnet, and trade it with other people _today_? A token that can be traded anywhere and anytime.

# How is this possible?

While we don't have access to real TSLA stocks themselves, the UMA protocol gives us the ability to basically mint any token as long as it's backed by a sufficient amount of collateral (which can be different from the underlying asset).

Sounds magical, right?

But this concept is how DAI (a stablecoin that tracks the USD) has been minted from vaults of collateralized ETH since 2018. Conceptually, staking ETH and minting DAI is not all that different from staking something else and minting a TSLA token.

These are called **synthetic tokens** because you can trade them as if they were the "real thing" without requiring anyone in the system to actually buy or sell the underlying asset (as long as there's a reliable mechanism for ascertaining price and ensuring collateralization).

# Two requirements

In order to create a synthetic token with the UMA protocol, there are two things that need to be approved by UMA token holders:

1. The collateral currency, and;
2. A price identifier (for the synthetic token).

The collateral currency is what the collateral backing the synthetic tokens will be denominated by (usually an ERC20 token). The `collateralTokenWhitelist` of the `ExpiringMultiPartyCreator` smart contract tracks which tokens have been approved as collateral.

The price identifier is an ID that refers to the source of the underlying asset's price. In our example, this will be in reference to a price feed that tells us how much one share of TSLA is worth. This is stored inside the `IdentifierWhitelist` smart contract.

If these two components are already approved, then you're in luck! If not, then you will need to learn how to get them approved.

# The UMIP process

UMIP stands for the UMA Improvement Proposal, and it is the method in which new collateral types and price identifiers can be proposed amongst other governance decisions.

## Proposing a new collateral currency

If the desired collateral currency has not been approved yet, you can propose an UMIP for a new contract factory template. Here is an example of such a [proposal](https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-newcontract.md).

Note that each contract factory template is tied to a specific collateral currency, so by proposing a new contract factory template, we are essentially requesting the approval of a new collateral currency.

Considerations...

- consider security implications
- new collateral contributes to system PfC (profit from corruption)
- Prior to approval, there should be demonstrated community support for the change.

## Proposing a new price identifier

If your desired price identifier has not been approved yet, you can also propose a UMIP to have that included. Here is an example [proposal](https://github.com/UMAprotocol/UMIPs/blob/master/UMIPs/umip-2.md) that demonstrates adding ETHBTC as a price identifier.

Considerations...

- should be specific enough that \$UMA holders know how they should resolve it under most cases
- Prior to approval, there should be demonstrated community support for the change.

...segway to DVM

# Launching your token

It's very likely your token already exists, but if not here's how you can launch your own token factory.

1. Use the `ExpiringMultiPartyCreator`
2. Define `constructorParams`
3.

If the already token facility already exists:

1. Create a position w/ the EMP contract

# What happens now?

- as a token holder: buy the tokens on any DEX where it’s trading
- as a token sponsor: use the sponsor CLI tool on our docs site

- run a liquidation bot
- run or a dispute bot

- explain the DVM

# Further considerations

- Where will the synthetic tokens trade?
- What interface will synthetic token sponsors use to mint new tokens?
- Will the developer do anything to facilitate liquidity and growth in her tokens?

# Closing

- Mention that this whole article can apply to literally anything, not just price of TLSA
