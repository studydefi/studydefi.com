---
title: "NPM Install @studydefi/money-legos"
date: "2020-04-11"
description: "Struggling to source the correct ABIs and addresses when developing your DeFI DApp? Look no further!"
---

Here at [StudyDefi](https://studydefi.com), we understand how painful it is right now to build on top of existing mainnet Defi protocols like Uniswap, MakerDAO, Compound, Aave etc as we have personally dealt with it when building our first Defi DApp [Dedge](https://dedge.exchange).

Today, we're happy to announce that we will be open-sourcing a tool that we have been using heavily inside of [Dedge](https://dedge.exchange) called `money-legos`!


# Documentation

The documentation is hosted at https://money-legos.studydefi.com/

# Quickstart

`money-legos` is an NPM package that provides you with __both the mainnet address and the ABI__ needed for you to quickly and rapidly build your Defi Dapp:

### 1. Install `money-legos`
```bash
npm install @studydefi/money-legos
```

### 2. Import it into your project
```javascript
const { ethers } = require('ethers')
const { legos } = 'money-legos'

const provider = ethers.getDefaultProvider()

const daiContract = new ethers.Contract(
    legos.erc20.abi,
    legos.erc20.dai.address,
    provider
)

const main = async () => {
    const balWei = await daiContract.balanceOf("0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae")
    const bal = ethers.utils.formatEther(balWei)
    console.log(`Balance of EF: ${bal.toString()}`)
}

main()
```

To get a full sense of what protocols/ABIs it supports, check out the [GitHub repository!](http://github.com/studydefi/money-legos)
