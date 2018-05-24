# Workshop: The Lightning Network

Slides, links and tutorials used for the workshop on the Lightning Network.


Links to slides:
* [The Lightning Network: Hands-on workshop](slide-03-workshop.html)
* [Smart Contracts/The Lightning Network: Talk at the Impact Hub on 2018-02-07](slide-02-impact-hub.html)
* [Trading Basics: Talk at the Impact Hub on 2018-02-07 by Jan Gobeli](slides_trading_basics_jan_gobeli.pptx)


# Task 1: Install Lightning Network wallet

In this first task we are going to install one of the already many software wallets that exist
for the Lightning Network.

For the workshop we are going to focus on these three options even if there are others available.
So please choose one, preferably based on your skill.

## Option 1a (easy, Android only): Eclair Wallet Testnet

* Go to the Android Play store and install the [Eclair Wallet Testnet](https://play.google.com/store/apps/details?id=fr.acinq.eclair.wallet&hl=en)
* Start the app and find your wallet's Bitcoin address (should start with 2... for Testnet)
* Go to [testnet.manu.backend.hamburg/faucet](https://testnet.manu.backend.hamburg/faucet) and send yourself some Testnet Bitcoins

## Option 1b (easy, iOS only): CoinClip Testnet

* Go to the Apple App Store and install the [CoinClip Testnet](https://itunes.apple.com/us/app/coinclip-testnet/id1372927440)
* Start the app, wait for it to sync and find your wallet's Bitcoin address (button "Receive" in the section with the chain icon, should start with 2... for Testnet)
* Go to [testnet.manu.backend.hamburg/faucet](https://testnet.manu.backend.hamburg/faucet) and send yourself some Testnet Bitcoins

## Option 2 (advanced, GUI): Zap desktop wallet

**Requirements**:
* Node.js version >= 8
* npm version >= 5
* yarn 

Once you have installed the tools mentioned above continue here:
* Go to [https://github.com/LN-Zap/zap-desktop](https://github.com/LN-Zap/zap-desktop) and follow the installation instructions
* The binaries for `lnd` can be downloaded here: [LND binary releases](https://github.com/guggero/lightning-workshop/releases)
* Start the GUI with `npm run dev`
* Go to your wallet and display your wallet's address (should start with 2... for Testnet)
* Go to [testnet.manu.backend.hamburg/faucet](https://testnet.manu.backend.hamburg/faucet) and send yourself some Testnet Bitcoins

## Option 3a (advanced, CLI): Command line

Create a directory where the data for the `lnd` process will be stored. For the example we will assume that the directory is `/tmp/lnd`.
Also add the binaries from [LND binary releases](https://github.com/guggero/lightning-workshop/releases) and add them to the PATH environment variable.

Open one command line window and run the following command:

```bash
lnd \
  --lnddir=/tmp/lnd \
  --logdir=/tmp/lnd \
  --bitcoin.active \
  --bitcoin.testnet \
  --bitcoin.node=neutrino \
  --neutrino.addpeer=btcd0.lightning.computer:18333 \
  --neutrino.addpeer=faucet.lightning.community \
  --neutrino.addpeer=lnd.bitrefill.com:18333 \
  --autopilot.maxchannels=0 \
  --autopilot.allocation=0 \
  --debuglevel=debug
```

If no critical error messages are printed and you see the message `Waiting for wallet encryption password`, you can create a wallet with the command:

```bash
lncli --lnddir=/tmp/lnd create
```

This should create a new wallet and sync the blockchain.

You can get the status of your node with the command:

```bash
lncli --lnddir=/tmp/lnd getinfo
```

To get an overview of all available commands, run:

```bash
lncli --lnddir=/tmp/lnd help
```

To get a wallet address, run the following command:

```bash
lncli --lnddir=/tmp/lnd newaddress p2wpkh
```

This might take a while if the wallet is not yet synced to the chain. But finally an address starting with 2... should be printed.

## Option 3 (advanced, CLI): Docker container

Create a directory where the data for the `lnd` process will be stored. For the example we will assume that the directory is `/tmp/lnd`.

Run the following command to pull and run a docker image:
```bash
docker run -d \
  -v /tmp/lnd:/root/.lnd \
  --restart=unless-stopped \
  --name=lnd \
  --entrypoint= \
  guggero/lnd \
  lnd \
  --logdir="/root/.lnd" \
  --bitcoin.active \
  --bitcoin.testnet \
  --bitcoin.node=neutrino \
  --neutrino.addpeer=btcd0.lightning.computer:18333 \
  --neutrino.addpeer=faucet.lightning.community \
  --neutrino.addpeer=lnd.bitrefill.com:18333 \
  --autopilot.maxchannels=0 \
  --autopilot.allocation=0 \
  --debuglevel=debug
```

This should start lnd in a container. The log can be viewed with `docker logs -f lnd`.

Now create a wallet with the command line tool that comes with lnd:

```bash
docker exec -ti lnd lncli create
```

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
  * iOS app: Find a button that reads "Open channel", then click "Scan Pubkey@HostIP"
  * Zap: Add a new "Contact". This will connect and also open a payment channel
  * Command line:
     * `lncli --lnddir=/tmp/lnd connect pubkey@ip:port`
     * `lncli --lnddir=/tmp/lnd openchannel pubkey amount`
     * `lncli --lnddir=/tmp/lnd listchannels`
  * Docker:
     * `docker exec -ti lnd lncli connect pubkey@ip:port`
     * `docker exec -ti lnd lncli openchannel pubkey amount`
     * `docker exec -ti lnd lncli listchannels`

