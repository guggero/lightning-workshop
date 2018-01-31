# Workshop: The Lightning Network

Slides, links and tutorials used for the workshop on the Lightning Network.

[The slides can be found here.](slide-01-workshop.html)


# Task 1: Install Lightning Network wallet

In this first task we are going to install one of the already many software wallets that exist
for the Lightning Network.

For the workshop we are going to focus on these three options even if there are others available.
So please choose one, preferably based on your skill. 

## Option 1 (easy, Android only): Eclair Wallet Testnet

* Go to the Android Play store and install the [Eclair Wallet Testnet](https://play.google.com/store/apps/details?id=fr.acinq.eclair.wallet&hl=en)
* Start the app and find your wallet's Bitcoin address (should start with 2... for Testnet)
* Go to [testnet.manu.backend.hamburg/faucet](https://testnet.manu.backend.hamburg/faucet) and send yourself some Testnet Bitcoins

## Option 2 (advanced, GUI): Zap desktop wallet

**Requirements**:
* Node.js version >= 8
* npm version >= 5
* yarn 

Once you have installed the tools mentioned above continue here:
* Go to [https://github.com/LN-Zap/zap-desktop](https://github.com/LN-Zap/zap-desktop) and follow the installation instructions
* The binaries for `lnd` can be downloaded here (built on commit [b4e280e](https://github.com/lightningnetwork/lnd/commit/b4e280eb152cbd5f2e9d7e116976316fd95be1c7) on 2018-01-30):
  * Linux: [lnd binary for linux/amd64](https://raw.githubusercontent.com/guggero/lightning-workshop/master/lnd-binaries/linux-amd64/lnd)
  * Mac: [lnd binary for darwin/amd64](https://raw.githubusercontent.com/guggero/lightning-workshop/master/lnd-binaries/darwin-amd64/lnd)
  * Windows: [lnd binary for windows/amd64](https://raw.githubusercontent.com/guggero/lightning-workshop/master/lnd-binaries/windows-amd64/lnd)
* Start the GUI with `npm run dev`
* Go to your wallet and display your wallet's address (should start with 2... for Testnet)
* Go to [testnet.manu.backend.hamburg/faucet](https://testnet.manu.backend.hamburg/faucet) and send yourself some Testnet Bitcoins

## Option 3 (advanced, CLI): Docker container

Create a directory where the data for the `lnd` process will be stored. For the example we will assume that the directory is `/tmp/lnd`

Run the following command to pull and run a docker image:
```bash
docker run -d \
  -v /tmp/lnd:/root/.lnd \
  --restart=unless-stopped \
  --name=lnd \
  --entrypoint= \
  guggero/lnd \
  lnd \
  --noencryptwallet \
  --logdir="/root/.lnd" \
  --bitcoin.active \
  --bitcoin.testnet \
  --bitcoin.node=neutrino \
  --neutrino.connect=btcd0.lightning.computer:18333 \
  --autopilot.active \
  --debuglevel=debug
```

This should start lnd in a container. The log can be viewed with `docker logs -f lnd`

To use the command line tool that comes with lnd, use the following command (for example, to get the node info with `getinfo`):

```bash
docker exec -ti lnd lncli getinfo
```

To get an overview of all available commands, run:

```bash
docker exec -ti lnd lncli help
```

To get a wallet address, run the following command:

```bash
docker exec -ti lnd lncli newaddress p2wpkh
```

This might take a while if the wallet is not yet synced to the chain. But finally an address starting with 2... should be printed.

Go to [testnet.manu.backend.hamburg/faucet](https://testnet.manu.backend.hamburg/faucet) and send yourself some Testnet Bitcoins!

# Task 2: Open a Payment Channel

* Go to [lightning-test.puzzle.ch](https://lightning-test.puzzle.ch)
* Connect to the node that is described there and open a channel
  * Android app: Find a menu that reads "Scan node URI"
  * Zap: Add a new "Contact". This will connect and also open a payment channel
  * Docker:
     * `docker exec -ti lnd lncli connect pubkey@ip:port`
     * `docker exec -ti lnd lncli openchannel pubkey amount`
     * `docker exec -ti lnd lncli listchannels`

