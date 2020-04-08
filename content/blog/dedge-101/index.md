---
title: "Dedge 101"
date: "2020-04-08"
description: "What is Dedge, and a quickstart guide on using Dedge (with pictures!)"
---

After [Dedge's initial launch](https://studydefi.com/introducing-dedge/), one of the most frequent questions we have been asked is what exactly is Dedge, and what can it do. The goal of this blogpost is to serve as a clarification on what Dedge can do, and how you can get started using it.

The short vesion is that you can think of __Dedge as Compound++, it allows you to do everything on [Compound](http://compound.finance/), and more!__

## What _is_ Dedge?

Dedge is an extension on the [Compound Protocol](http://compound.finance/). With Dedge, you can manage your positions, __and hedge on them__. It achieves this by giving you __the ability to swap your collateral AND debt positions on [Compound](http://compound.finance/) at will.__

Think back to Black Thursday and the price of ETH is crashing. You're heavily leveraged on ETH, with DAI as your borrowed (debt) asset on MakerDAO / Compound. You have to quickly repay your debts, or you will be liquidated. If you're using Dedge, thats not a problem: you convert your borrowed (debt) asset from DAI to ETH, and now __the debt you owe is also dropping__.

But you can go one step further and convert your ETH collateral into DAI collateral, locking in the amount of collateral you're supplying. Meanwhile your borrowed amount (debt) is crashing - __thanks to the crash, you have to pay less debt while your collateral retains the same value!__

## Is Dedge on MakerDAO or Compound?

Dedge lives on top of [Compound](http://compound.finance/).

### Why is There A Import Maker Vault Button?

The import maker vault button is so users can easily convert their MakerDAO vault positions into Compound positions (just like [InstaDapp's migration bridge](https://instadapp.io/bridge/)) in one transaction.

# Quickstart

## 1. Create A Smart Wallet

You'll need to first create a "smart-wallet", which is a non-custodial smart contract which _you control_. The smart-wallet is needed as it allows us to perform a series of atomic transactions on your behalf. For example, taking out and repaying a loan.

![create-smart-wallet](https://i.imgur.com/H1GNfas.png)

Once you've done that, you should be greeted with a page simliar to:

![](https://i.imgur.com/kKFTnkl.png)

## 1.5 (Optional) Migrate MakerDAO Vault

If you have a MakerDAO vault, you can "migrate" your MakerDAO vault positions into Dedge

![](https://i.imgur.com/E5w7Dsr.png)

Unfortunately due to how Compound operates by default, we cannot migrate your existing Compound positions.

## 2. Supply Collateral

Once you've setup your smart wallet, you can start using it just like how you use Compound, but you'll need to supply some collateral first before you can borrow some assets. Click on the "options" column for the asset you would like to supply:

![](https://i.imgur.com/ZZVEG1m.png)

Choose the "supply" tab under the collateral group:

![](https://i.imgur.com/woC8gED.png)

(Note that for ERC-20 tokens, you'll first need to "Allow Action"):

![](https://i.imgur.com/O6zuOWK.png)

Enter the amount you would like to supply and click on the Supply button.

Once the transaction has been mined (this might take anywhere between 1 - 10 minutes), your balances should reflect your new position:

![](https://i.imgur.com/v48bSmh.png)

## 3. Borrow Asset

Once you've supplied a collateral, you can now borrow an asset, I've chosen to borrow DAI, but you can borrow any asset you please!

Just like supplying collateral, click on the "options" column for the asset you would like to borrow:

![](https://i.imgur.com/ZZVEG1m.png)

Choose the "borrow" tab under the debt group:

![](https://i.imgur.com/SO09fzr.png)

Enter the amount you would like to borrow and click on the Borrow button.

Once the transaction has been mined (this might take anywhere between 1 - 10 minutes), your balances should reflect your new position:

![](https://i.imgur.com/bbG7vw5.png)

## 4. Swapping Debt (Borrowed Asset)

Say the price of ETH is crashing, you want to swap your debt of 50 DAI to ETH to prevent your account from getting liquidated (your debt falls with your collateral). Enter your details in the left panel like so:

![](https://i.imgur.com/CC1Jr67.png)

Click confirm, wait for your transaction to be mined (this might take anywhere between 1 - 10 minutes), and your balance should reflect your new position:

![](https://i.imgur.com/u07sqnH.png)

## 5. Swapping Collateral (Supplied Asset)

Say you would like to convert 10 of your collateralized ETH to BAT, as it has a better APY%, but you've borrowed so much that you can't withdraw 10 ETH safely. No problem, simply change your details in the left panel to:

![](https://i.imgur.com/SrihcZy.png)

Click confirm, wait for your transaction to be mined (this might take anywhere between 1 - 10 minutes), and your balance should reflect your new position:

![](https://i.imgur.com/lwz5Gif.png)


## 6. Repaying Debt 

To repay debt, you can simply click on the "options" column for the asset you would like to perform the action on:

![](https://i.imgur.com/ZZVEG1m.png)

Select the "Repay" tab, and click approve (you'll need to do this once for each ERC-20 tokens).

![](https://i.imgur.com/CjVKIWW.png)

Once the ERC-20 tokens have been approved, you can start repaying your debt:

![](https://i.imgur.com/jfhFOk5.png)

## 7. Withdrawing Collateral

To repay debt, you can simply click on the "options" column for the asset you would like to perform the action on:

![](https://i.imgur.com/ZZVEG1m.png)

Select the "Withdraw" tab, enter the amount you would like to withdraw and click on the Withdraw button.

![](https://i.imgur.com/jfhFOk5.png)

# Questions

If you have any questions [contact us on telegram](https://t.me/dedgeexchange).