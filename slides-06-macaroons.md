![Puzzle ITC Logo](reveal.js-3.6.0/lib/img/puzzle_tagline_bg_rgb.svg)
<!-- .slide: class="master01" -->


<!-- section -->
## Barcamp session: Macaroons
Oliver Gugger, Puzzle ITC<br/><br/>
[@gugol](https://twitter.com/gugol)<br/>
[github.com/guggero](https://github.com/guggero)
<br/><br/>
Slides on [guggero.github.io](https://guggero.github.io)

<!-- .slide: class="master02" -->



<!-- section -->
## Agenda
* What are macaroons?
* How do they work?
* How are they used in LND?
* What features am I working on?
* Questions/discussion
<!-- .slide: class="master05" -->


<!-- slide -->
## What are macaroons?
* "Cookies with Contextual Caveats..."
* Paper from 2014 by Google employees and Brown university students
* https://ai.google/research/pubs/pub41892
   
<!-- .slide: class="master05" -->


<!-- slide -->
## How do they work?
<q>Macaroons are based on a construction that uses nested,
  chained MACs (e.g., HMACs) in a manner that is highly efficient...</q>

<!-- .slide: class="master05" -->


<!-- slide -->
## How do they work?

<img src="img/slides-06/macaroons-hash-chain.svg" width="60%">

<!-- .slide: class="master05" -->

<!-- slide -->
## How do they work?

<img src="img/slides-06/macaroons-hash-chain-with-serialized.svg" width="90%">

<!-- .slide: class="master05" -->


<!-- slide -->
## How do they work?

<img src="img/slides-06/macaroons-hash-chain-example.svg" width="90%"><br/>
<a href="https://guggero.github.io/cryptography-toolkit/#!/macaroon">
  Online demo
</a>

<!-- .slide: class="master05" -->


<!-- slide -->
## How do they work?

<img src="img/slides-06/macaroons-hash-chain-custom.svg" width="90%">

<!-- .slide: class="master05" -->



<!-- section -->
## How are they used in LND?
* Root Key is stored in `macaroons.db`
* Identifier contains nonce and read/write permissions<br/>
  <img src="img/slides-06/lnd-macaroon-id.png" width="40%">
* Location is always `lnd`
* Three pre-generated macaroons: <br/>`readonly`, `invoice`, `admin`

<!-- .slide: class="master03" -->

<!-- slide -->
## How are they used in LND?
* Supported caveat conditions:
   * `time-before <utc-timestamp>`
   * `ipaddr <client-ip-address>`
* Can be declared with `lncli` parameters

```
--macaroontimeout <in seconds, default 60>
--macaroonip <ip-address, default not set>
```

<!-- .slide: class="master03" -->



<!-- section -->
## What am I working on?

* Submitted PRs:
  * delegate macaroon [#1147](https://github.com/lightningnetwork/lnd/pull/1147)
  * integration tests for macaroons [#1152](https://github.com/lightningnetwork/lnd/pull/1152)
  * create custom macaroon [#1160](https://github.com/lightningnetwork/lnd/pull/1160)
  * request hash caveat [#1181](https://github.com/lightningnetwork/lnd/pull/1181)
  * stateless initialization [#1288](https://github.com/lightningnetwork/lnd/pull/1288)
  * macaroon based accounting [#2390](https://github.com/lightningnetwork/lnd/pull/2390)

<!-- .slide: class="master04" -->


<!-- slide -->
## What am I working on?

* Ideas:
  * permissions for single RPC calls not just groups
  * recurring payments (based on accounts)
  * third party caveats
   

<!-- .slide: class="master04" -->



<!-- section -->
## Questions?

<!-- .slide: class="master01" -->