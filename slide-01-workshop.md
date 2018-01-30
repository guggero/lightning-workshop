![Puzzle ITC Logo](reveal.js-3.6.0/lib/img/puzzle_tagline_bg_rgb.svg)
<!-- .slide: class="master01" -->

<!-- section -->
### Workshop: The Lightning Network
Oliver Gugger ([@gugol](https://twitter.com/gugol), [github.com/guggero](https://github.com/guggero)) 

Part of the Lightning Network team at Puzzle ITC
<!-- .slide: class="master02" -->


<!-- section -->
### The current state of Bitcoin (2018-01-30)

 - SegWit is enabled
   ![SegWit transactions percentage](img/slide-01/segwit-tx-percentage.png)
   <small>from: segwit.party/charts/</small>
<!-- .slide: class="master03" -->


<!-- slide -->
### The current state of Bitcoin (2018-01-30)

 - Mempool is emptying
   ![Mempool transaction count](img/slide-01/mempool-tx-count.png)
   <small>from: blockchain.info/charts/mempool-count</small>
<!-- .slide: class="master04" -->


<!-- slide -->
### The current state of Bitcoin (2018-01-30)

 - Fees are dropping
   ![Mempool transaction count](img/slide-01/mempool-tx-fees.png)
   <small>from: dedi.jochen-hoenicke.de/queue</small>
<!-- .slide: class="master05" -->

<!-- section -->
### Problem?

 - When demand is high, the fees fluctuate even more than price <br/>
   ![SegWit transactions percentage](img/slide-01/mempool-tx-fees-december-17.png)
   <!-- .element width="75%" -->
   <small>from: dedi.jochen-hoenicke.de/queue</small>
<!-- .slide: class="master03" -->

<!-- slide -->
### Problem?

 - Even with SegWit the block size is limited (1'000 vkB, 4'000 kWU)
 - Average transactions per block went up as far as 2'723 (~4.5 tx/s)
 - How do we get to Visa which can process up to 24'000 tx/s at peak?
 
<!-- .slide: class="master04" -->

<!-- section -->
### Solution?

## Bigger blocks!
Sure, because downloading 5.3 GB every 10 minutes is no problem!
<!-- .slide: class="master03" -->

<!-- slide -->
### Better solution

 - Scale off-chain
 - Add a layer 2
 - For example: The Lightning Network
<!-- .slide: class="master04" -->

<!-- section -->
### The Lightning Network

 - Smart Contracts create Payment Channels
 - Funding transaction is in blockchain
 - Payment Channel updates happen at "speed of light"
<!-- .slide: class="master03" -->

<!-- slide -->
### The Lightning Network

 - Payments can be routed through multiple hops/channels, creating a network
 - Protected by onion routing/multi layer encryption
 - No trust required, cheating made impossible by cryptography
<!-- .slide: class="master04" -->

<!-- slide -->
### Workshop: Task 1

 - Install any Lightning Network wallet for Bitcoin testnet as
   described on [https://gugger.guru/lightning-workshop/](https://gugger.guru/lightning-workshop/)
 - Send yourself some testnet Bitcoin
<!-- .slide: class="master04" -->

<!-- section -->
### How it works

![Funding Transaction](img/slide-01/lightning-channels-01-funding-tx.png)
<small>from: https://www.youtube.com/watch?v=7tHD9Gj9UNg</small>
<!-- .slide: class="master03" -->

<!-- slide -->
### How it works

![Bi-Directional Channels](img/slide-01/lightning-channels-02-bi-directional.png)
<small>from: https://www.youtube.com/watch?v=7tHD9Gj9UNg</small>
<!-- .slide: class="master04" -->

<!-- slide -->
### How it works

![Bi-Directional Channels](img/slide-01/lightning-channels-03-second-update.png)
<small>from: https://www.youtube.com/watch?v=7tHD9Gj9UNg</small>
<!-- .slide: class="master05" -->