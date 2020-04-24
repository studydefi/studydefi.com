---
title: "Integrating Mainnet DeFi Protocols into your Ethereum Dapp"
date: "2020-04-24"
description: "Wanna try build a dapp that interacts with multiple mainnet protocols but don't know where to start? Read on!"
thumbnail: './building-blocks.jpg'
---

![building blocks](./building-blocks.jpg)

While building [Dedge](https://dedge.exchange), one of the first problems we encountered was:

> How do we interact with existing Mainnet dapps?

Well after some thinking, we figured...

![do it live](./do-it-live.gif)

Basically, we would ideally want to fork off the current Mainnet state into a sandboxed environment, and develop/test our smart contracts from there.

# Advantages

This provides a few essential benefits:

1. **Real and full liquidity** on all existing DeFi protocols and exchanges (e.g. Aave, Compound, Uniswap, etc.).
2. You have guaranteed access to **every major protocol** deployed on Mainnet.
   - If you were using official testnets (like Rinkeby or Ropsten) the protocol you want might not be deployed there
3. You get **[dev/prod parity](https://12factor.net/dev-prod-parity)**, which means you get to use the same contract addresses and ABIs everywhere.

And how can we achieve this?

Fortunately, the amazing folks over at [truffle](https://www.trufflesuite.com/) has made a lovely tool called [Ganache](https://github.com/trufflesuite/ganache-cli/).

# Quickstart

To fork off Mainnet, simply invoke the `-f` flag on `ganache-cli`.

```bash
npx ganache-cli -f https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73 -i 5777 -d
```

_This Infura API key is obtained publicly from [Ethers.js](https://github.com/ethers-io/ethers.js/blob/master/src.ts/providers/infura-provider.ts#L14)._

This will spawn a Ganache instance, which is a test blockchain with Mainnet state on `http://localhost:8545`.

You can then try and interact with some Mainnet contracts, for example here's the full code to interact with `WETH` or [Wrapped Ether](https://weth.io/):

```javascript
const { legos } = require("@studydefi/money-legos")
const { ethers } = require("ethers")

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")

const wallet = new ethers.Wallet(
  "0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773", // Default private key for ganache-cli -d
  provider
)

const wethContract = new ethers.Contract(
  legos.erc20.weth.address,
  legos.erc20.weth.abi,
  wallet
)

const main = async () => {
  await wethContract.deposit({
    value: ethers.utils.parseEther("1.0"),
    gasLimit: 1000000,
  })

  const wethBal = await wethContract.balanceOf(wallet.address)

  console.log(`WETH Balance: ${ethers.utils.formatEther(wethBal)}`)
}

main()
```
<br />

Note that the above code sample uses our `money-legos` library, which we dive into in this blog [post](../npm-install-money-legos).

# "Gotchas" to be aware of

Unfortunately the Infura key from Ethers.js does not point to an archival node. That means you will have to to restart `ganache-cli` every 128 blocks (~30 minutes), otherwise you'll be greeted with the following message from Infura:

> Returned error: project ID does not have access to archive state

Stay tuned for the next blogpost on how to avoid this issue (without paying \$250/month for an archival node)!
