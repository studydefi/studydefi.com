---
title: "How to make your own TSLA token on Mainnet"
date: "2020-05-18"
description: "A guide on making your own synthetic token and deploying it to Mainnet."
thumbnail: "./testing-header.png"
---

Have you ever wanted to buy a share of Apple or Tesla? For most people, that's often easier said than done. These stocks live on the Nasdaq stock exchange and it's not quite the same thing as buying a Big Mac from McDonald's.

Depending on where you live, you might not even be able to purchase these assets. And even if you live in the US, you still have to wait for the opening hours of the Nasdaq stock exchange.

What if I told you that you can create your own ERC20 token that tracks the price of TSLA and launch it onto the Ethereum Mainnet today?

# How is this possible?

While we don't have access to real TSLA stocks themselves, the UMA protocol gives us the ability to basically mint any token as long as it's backed by a sufficient amount of collateral.

Sounds magical, right? But that's how MakerDAO has been printing DAI (a coin that tracks the USD) all this time. People staked their ETH as collateral, and they were able to mint DAI as a result. Conceptually, it is really not all that different.

We call these tokens synthetic tokens because they can trade with a value that tracks the underlying asset without having to actually buy or sell the underlying asset itself.

# Two requirements of the UMA protocol

In order to create a token factory, there are two requirements:

1. A collateral currency
2. A price identifier


















1. If these two components are approved, then your token might already exist!
  - Skip to the part below where X
1. Explain UMIP — if you need to request approval, here’s how.
1. Once these two components are fulfilled, here’s the code on how to launch your token
1. Further considerations:
  - Where will the synthetic tokens trade? 
  - What interface will synthetic token sponsors use to mint new tokens?
  - Will the developer do anything to facilitate liquidity and growth in her tokens?
1. Closing
  - Mention that this whole article can apply to literally anything, not just price of TLSA
