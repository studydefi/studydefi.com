---
title: "Dedge 101"
date: "2020-04-08"
description: "What is Dedge, and a quickstart guide on using Dedge (with pictures!)"
---

After Dedge's initial [launch](https://studydefi.com/introducing-dedge/), one of the most frequent questions we have been asked is what exactly is Dedge, and what can it do. The goal of this blogpost is to clarify what Dedge can do, and how to get started using it.

The short version is that you can think of __Dedge as Compound++, it allows you to do everything on [Compound](http://compound.finance/), but also switch between coins instantly!__

## What _is_ Dedge?

Dedge is an extension on the [Compound Protocol](http://compound.finance/). With Dedge, you can manage your positions, and hedge against market fluctuations. It achieves this by giving you __the ability to swap your collateral AND debt positions on [Compound](http://compound.finance/) instantly.__

Think back to Black Thursday when the price of ETH was crashing. You're heavily leveraged on ETH, with DAI as your borrowed (debt) asset on MakerDAO or Compound. You have to quickly repay your debts, or you will be liquidated.

If you were using Dedge, that wouldn't be a problem at all: you just convert your borrowed (debt) asset from DAI to ETH, and now __the debt you owe is also dropping__.

But you can go one step further and convert your ETH collateral into DAI collateral, essentially "freezing" the value of your supplied collateral. Meanwhile your borrowed amount (debt) is crashing - __thanks to the crash, your position is actually profiting from the crash.__

## Is Dedge on MakerDAO or Compound?

Dedge lives on top of [Compound](http://compound.finance/), it doesn't interface with MakerDAO except to import positions from it.

### Why is there an Import Maker Vault button?

The Import Maker Vault button is a convenience feature for users to easily convert their MakerDAO vault positions into Compound positions. You can also directly supply collateral into Compound through Dedge.

# Quickstart

## 1. Create A Smart Wallet

You'll need to first create a "Smart Wallet", which is a non-custodial smart contract that _you control_. The Smart Wallet is needed as it allows Dedge to perform a series of atomic transactions on your behalf. For example, taking out and repaying a loan.

![create-smart-wallet](https://i.imgur.com/H1GNfas.png)

Once you've done that, you should be greeted with a page simliar to:

![](https://i.imgur.com/kKFTnkl.png)

## 1.a (Optional) Migrate MakerDAO Vault

If you have a MakerDAO vault, you can "migrate" your MakerDAO Vault positions into Dedge. Do note that this is not required, you can simply supply collateral as in Step 2.

![](https://i.imgur.com/E5w7Dsr.png)

Unfortunately due to how Compound operates, we cannot migrate your existing Compound positions.

## 2. Supply Collateral

Once you've setup your smart wallet, you can start using it just like how you use Compound. If you didn't import a MakerDAO Vault, you'll need to supply some collateral before you can do anything on Dedge. Click on the "options" column for the asset you would like to supply:

![](https://i.imgur.com/ZZVEG1m.png)

Click the "Supply" tab under "Collateral":

![](https://i.imgur.com/woC8gED.png)

(Note that for ERC-20 tokens, you'll first need to "Allow Action"):

![](https://i.imgur.com/O6zuOWK.png)

Enter the amount you would like to supply and click on the Supply button.

Once the transaction has been mined (this might take anywhere between 1 - 10 minutes), your balances should reflect your new position:

![](https://i.imgur.com/v48bSmh.png)

## 3. Borrow Asset

Once you've supplied a collateral, you can now borrow an asset. For this example, I've chosen to borrow DAI, but you can borrow any asset you please!

Just like supplying collateral, click on the "options" column for the asset you would like to borrow:

![](https://i.imgur.com/ZZVEG1m.png)

Click the "Borrow" tab under "Debt":

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

Say you would like to convert 10 ETH of your collateral into BAT, since it has a better APY%, but you've borrowed so much that you can't withdraw 10 ETH safely. No problem, simply change your details in the left panel to:

![](https://i.imgur.com/SrihcZy.png)

Click confirm, wait for your transaction to be mined (this might take anywhere between 1 - 10 minutes), and your balance should reflect your new position:

![](https://i.imgur.com/lwz5Gif.png)


## 6. Repaying Debt 

To repay debt, you can simply click on the "options" column for the asset you would like to perform the action on:

![](https://i.imgur.com/ZZVEG1m.png)

Select the "Repay" tab, and click approve (you'll need to do this once for each ERC-20 token).

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
