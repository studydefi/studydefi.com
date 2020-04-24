---
title: "Integrating Mainnet DeFi Protocols into your Ethereum Dapp"
date: "2020-04-24"
description: "Wanna try build a dapp that interacts with multiple mainnet protocols but don't know where to start? Read on!"
---

While building out [Dedge](https://dedge.exchange), one of the first problems we encountered was:

> How do we even begin to start interacting with existing Mainnet dapps?

Ideally, we would like to fork off the current Mainnet state into a sandboxed environment, and develop/test our smart contracts from there. The reason this is important is because it provides a few essential benefits:

1. All existing DeFi protocols (e.g. Aave/Compound/etc.) have real and full liquidity.
2. You have guaranteed access to every major protocol deployed on Mainnet.
    - If you were using official testnets (e.g. Rinkeby) and needed to interact with more than one protocol, not all of them might be deployed to the same network
3. Since you're forking off of Mainnet state, all contract addresses will be the same in both development and production.
4. Your development velocity is significantly increased because you don't have to worry about deploying existing protocols onto your test network.


Fortunately, the amazing folks over at [truffle](https://www.trufflesuite.com/) has made a lovely tool called [Ganache](https://github.com/trufflesuite/ganache-cli/).

# Quickstart

To fork off Mainnet, simply invoke the `-f` flag on `ganache-cli`.

```bash
npx ganache-cli -f https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73 -i 5777 -d
```
_This Infura API key is obtained publicly from [Ethers.js](https://github.com/ethers-io/ethers.js/blob/master/src.ts/providers/infura-provider.ts#L14)._

You should be able to interact with Ganache (with Mainnet state) on `http://localhost:8545`.

You can then try and interact with some Mainnet contracts, for example `WETH` or Wrapped Ether:

```javascript
const { legos } = require("@studydefi/money-legos");
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

const wallet = new ethers.Wallet(
  "0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773", // Default private key for ganache-cli -d
  provider
);

const wethContract = new ethers.Contract(
  legos.erc20.weth.address,
  legos.erc20.weth.abi,
  wallet
);

const main = async () => {
  await wethContract.deposit({
    value: ethers.utils.parseEther("1.0"),
    gasLimit: 1000000,
  });

  const wethBal = await wethContract.balanceOf(wallet.address);

  console.log(`WETH Balance: ${ethers.utils.formatEther(wethBal)}`);
};

main();
```

Note that the above code sample uses our `money-legos` library. We will take a deep dive into that [package](https://github.com/studydefi/money-legos) in a future blog post.

# "Gotchas" to be aware of

Unfortunately the Infura key from Ethers.js does not point to an archival node. That means you will have to to restart `ganache-cli` every 128 blocks (~30 minutes), otherwise you'll be greeted with the following message from Infura:

> Returned error: project ID does not have access to archive state

Stay tune for the next blogpost on how to avoid this issue (without paying $250/month for an archival node)!
