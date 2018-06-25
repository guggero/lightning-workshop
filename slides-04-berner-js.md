![Puzzle ITC Logo](reveal.js-3.6.0/lib/img/puzzle_tagline_bg_rgb.svg)
<!-- .slide: class="master01" -->


<!-- section -->
### Bitcoin Cryptography with JavaScript
Oliver Gugger<br/><br/>
<small>Full Stack Engineer at Puzzle ITC<br/>
<img src="img/github-logo.png" width="22" style="margin-top:5px"> github.com/guggero<br/>
<img src="img/twitter-logo.png" width="28" style="margin-top:5px"> @gugol
</small>
<!-- .slide: class="master02" -->


<!-- slide -->
<slide tagcloud shuffle>
  ECC
  block
  asymmetric
  address
  private key
  SHA256
  signature
  merkle tree
  ECDSA
  public key
  transaction
  HMAC
  multi-signature
  RIPEMD160
</slide>
<!-- .slide: class="master03" -->

<!-- slide -->
<img src="img/slides-04/math-makes-people-cry.png">
<p class="fragment fade-in">
  Don't worry! This is a high-level overview for engineers and coders.
</p>
<!-- .slide: class="master03" -->

<!-- slide -->
### Cryptography Primitives in Bitcoin
 * Elliptic curves (ECC / ECDSA)
 * Hashing (SHA, RIPEMD)
<!-- .slide: class="master04" -->


<!-- slide -->
### Elliptic Curve Cryptography
 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/ECClines.svg" height="15%"/><br/>
 * Geometry based one-way function
 * Can be used for key exchange (ECDH) and signatures (ECDSA)
 * Shorter key size compared to RSA<br/>(256bit ECC ≃ 3072bit RSA)
<!-- .slide: class="master05" -->


<!-- slide -->
### Cryptographic Hashing
 * Collision resistant, constant-size fingerprint
 * SHA256 extensively used in Bitcoin
 * RIPEMD160 as a secondary safety net for addresses
<!-- .slide: class="master01" -->


<!-- slide -->
### Demo: Libraries used
<a href="demos/berner-js/demo.html">Demo</a><br/>
 * WebCryptoAPI 
 * CryptoJS
 * bitcoinjs-lib
<!-- .slide: class="master02" -->
