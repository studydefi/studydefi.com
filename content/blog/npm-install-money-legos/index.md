---
title: "NPM Install `money-legos`"
date: "2020-04-11"
description: "Struggling to source the correct ABIs and addresses when developing your DeFI DApp? Look no further!"
---

Here at [StudyDefi](https://studydefi.com), we understand how painful it is right now to build on top of existing mainnet Defi protocols like Uniswap, MakerDAO, Compound, Aave etc as we have personally dealt with it when building our first Defi DApp [Dedge](https://dedge.exchange).

Today, we're happy to announce that we will be open-sourcing a tool that we have been using heavily inside of [Dedge](https://dedge.exchange) called `money-legos`!

# Usage

`money-legos` is an NPM package that provides you with both the ABI and the addresses needed for you to quickly and rapidly build your Defi Dapp:

```bash
npm install money-legos
```

## Web3.js
```javascript
const Web3 = require('web3')
const web3 = new Web3("http://127.0.0.1:8545");
const accounts = await web3.eth.getAccounts();

const { getLegos, networkIds } = 'money-legos'
const legos = getLegos(networkIds.mainnet)

const daiContract = new web3.eth.Contract(
    legos.erc20.dai.address,
    legos.erc20.abi,
    { from: accounts[0] }
);

const main = async () => {
    const balWei = await daiContract.balanceOf("0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae").call()
    console.log(`Balance of EF: ${balWei}`)
}

main()
```

## Ethers
```javascript
const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider()

const { getLegos, networkIds } = 'money-legos'
const legos = getLegos(networkIds.mainnet)

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

Check out [GitHub repository!](http://github.com/studydefi/money-legos)