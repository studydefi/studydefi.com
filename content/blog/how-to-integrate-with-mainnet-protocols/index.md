---
title: "How to Integrate with Ethereum Mainnet DeFi Protocols"
date: "2020-04-24"
description: "Wanna try build a dapp that interacts with multiple mainnet protocols but don't know where to start? Read on!"
---

While building out [Dedge](https://dedge.exchange), one of the first problems we encountered was:

> How and where do we start integrating with mainnet DeFi protocols?

Ideally, we would like to fork off the current mainnet state into a sandboxed environment, and develop/test our smart contracts from there. The emphasis on forking off the mainnet state it provides a couple key features:

1. Liquidity automatically configured on other DeFi procotols e.g. Aave/Compound/Compound.
2. You're almost guaranteed every major procotol will be deployed on mainnet.
    - If you're interacting with multiple protocols, they might not all be available on the same testnet e.g. Rinkeby
3. As you're forking off the mainnet state, all mainnet contract addresses will be the same in your private testnet.
4. Increases your development velocity as you can just focus on developing your application, not writing scripts to deploy the protocols to your private testnet.


Fortunately, the amazing folks over at [truffle](https://www.trufflesuite.com/) has made a lovely tool called [ganache-cli](https://www.trufflesuite.com/ganache).

# Quickstart

To fork off mainnet, simply invoke the `-f` flag on `ganache-cli`.

```bash
npx ganache-cli -f https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73 -i 5777 -d
```
_The infura api key is obtained from [ethers.js](https://github.com/ethers-io/ethers.js/blob/master/src.ts/providers/infura-provider.ts#L14)._

You should be able to interact with ganache (with mainnet state) on `http://localhost:8454`.

You can then try and interact with some mainnet contract, for example `wETH`:

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

  console.log(`wETH Bal: ${ethers.utils.formatEther(wethBal)}`);
};

main();
```

# "Gotchas" to be aware of

Unfortunately the infura key from `ether.js` does not point to an archival node. That means you will have to to restart `ganache-cli` every 128 blocks (~30 minutes), otherwise you'll be greeted with the following message from infura:

> Returned error: project ID does not have access to archive state

Stay tune for the next blogpost on how to avoid this issue (without paying $250/month for an archival node)!