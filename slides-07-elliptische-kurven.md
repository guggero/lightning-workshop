![Puzzle ITC Logo](reveal.js-3.6.0/lib/img/puzzle_tagline_bg_rgb.svg)
<!-- .slide: class="master01" -->


<!-- section -->
## Elliptische Kurven
Oliver Gugger, Puzzle ITC<br/><br/>
[@gugol](https://twitter.com/gugol)<br/>
[github.com/guggero](https://github.com/guggero)
<br/><br/>
Folien auf [guggero.github.io](https://guggero.github.io)<br/><br/>
<small>Folien basierend auf den Vorlesungen von Christoph Paar:
<a href="https://www.youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/videos">https://www.youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/videos</a>
</small>

<!-- .slide: class="master02" -->



<!-- section -->
## Agenda
* Was sind Gruppen?
* Beispiel in $ \mathbb{Z}^*_{11} $
* Was sind Körper?
* Geometrische Interpretation der Elliptischen Kurven
* Kryptografie mit Elliptischen Kurven
* Rechenbeispiel
* Anwendungen

<!-- .slide: class="master03" -->


<!-- slide -->
## Was sind Gruppen?
* Werden verwendet um Rechnen mit konkreten Zahlen zu abstrahieren, sprich rechnen mit Symbolen statt Zahlen
* Zutaten: Paar aus Menge $G$ und Operation, <br/>z.B. $*$ oder $+$
* Beispiel: $ (\mathbb{Z}, *) $

<!-- .slide: class="master05" -->

<!-- slide -->
## Was sind Gruppen?
* Abgeschlossenheit: Für alle GE a und b gilt: <br/>$ (a ∗ b) ∈ G $
* Assoziativität: Für alle GE a, b und c gilt: <br/>$ (a ∗ b) ∗ c = a ∗ (b ∗ c) $

<!-- .slide: class="master05" -->


<!-- slide -->
## Was sind Gruppen?
* Neutrales Element: Es gibt ein neutrales Element $ e ∈ G $, mit dem für alle GE a gilt:<br/>
  $ a ∗ e = e ∗ a = a $
* Inverses Element: Zu jedem GE a existiert ein Element <br/>
  $ a^{-1} ∈ G $ mit $ a∗a^{-1} = a^{-1} ∗ a = e $ 

<!-- .slide: class="master05" -->


<!-- slide -->
## Was sind Gruppen?

* Gruppe $ (G, \*) $ heisst *abelsch* oder *kommutativ* wenn Operation $ * $ symmetrisch ist.
* Kommutativität: Für alle GE a und b gilt <br/>$ a ∗ b = b ∗ a $
* Mächtigkeit (Kardinalität) $ |G| $ der Gruppe nennt man Ordnung der Gruppe

<!-- .slide: class="master05" -->


<!-- slide -->
## Beispiel in modulo 11

* $ \mathbb{Z}^*_{11} = \\{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 \\} $
* $ (\mathbb{Z}^*_{11}, *) $ ist eine abelsche Gruppe $ \pmod{11} $
* $ |\mathbb{Z}^*_{11}| = 10 $

<!-- .slide: class="master05" -->


<!-- slide -->
$ a = 3 $

$ a^0 = 1 \pmod{11} \equiv 1 $
$ a^1 = a^0 * 3 \pmod{11} \equiv 3 $
$ a^2 = a^1 * 3 \pmod{11} \equiv 9 $
$ a^3 = a^2 * 3 \pmod{11} \equiv 5 $
$ a^4 = a^3 * 3 \pmod{11} \equiv 4 $
$ a^5 = a^4 * 3 \pmod{11} \equiv 1 $
$ a^6 = a^5 * 3 \pmod{11} \equiv 3 $

<!-- .slide: class="master05" -->

<!-- slide -->
$ a = 2 $

$ a^0 = 1 \pmod{11} \equiv 1 $
$ a^1 = a^0 * 2 \pmod{11} \equiv 2 $
$ a^2 = a^1 * 2 \pmod{11} \equiv 4 $
$ a^3 = a^2 * 2 \pmod{11} \equiv 8 $
$ a^4 = a^3 * 2 \pmod{11} \equiv 5 $
$ a^5 = a^4 * 2 \pmod{11} \equiv 10 $
$ a^6 = a^5 * 2 \pmod{11} \equiv 9 $

<!-- .slide: class="master05" -->

<!-- slide -->
$ a = 2 $

$ a^7 = a^6 * 2 \pmod{11} \equiv 7 $
$ a^8 = a^7 * 2 \pmod{11} \equiv 3 $
$ a^9 = a^8 * 2 \pmod{11} \equiv 6 $
$ a^{10} = a^9 * 2 \pmod{11} \equiv 1 $
$ a^{11} = a^{10} * 2 \pmod{11} \equiv 2 $

<!-- .slide: class="master05" -->

<!-- slide -->
## Was sind Körper?

Ein Körper ist ein Tripel $ (K, +, \*) $ aus Menge $K$ und Operationen $+$ und $*$:
* $(K, +)$ ist eine abelsche Gruppe,
* $(K\setminus \\{0\\}, \*)$ ist eine abelsche Gruppe

<!-- .slide: class="master05" -->


<!-- slide -->
## Was sind Körper?

* Die Distributivgesetze
  $ a * (b + c) = a * b + a * c $ <br/>und</br>
  $ (a + b) * c = a * c + b * c $ <br/>
  sind für alle $ a,b,c \in K $ erfüllt.

<!-- .slide: class="master05" -->


<!-- slide -->
## Was sind Körper?

* Beispiel: $ (\mathbb{Q}, +, \*) $  ist ein Körper
* Elliptische Kurven bilden einen Körper

<!-- .slide: class="master05" -->



<!-- section -->
## Geometrische Interpretation

<img src="img/slides-07/ecc-lines.png" />

<!-- .slide: class="master04" -->

<!-- slide -->
## Kryptografie

* Rechnen mit Kurven im Feld $ \mathbb{Z}^*_p \bmod n $
* Keine direkte geometrische Darstellung mehr, aber Regeln bleiben bestehen
* Generatorpunkt $G$, privater Schlüssel $k$
* Öffentlicher Schlüssel ist Punkt $ k*G $ oder auch $ G^k $

<!-- .slide: class="master03" -->


<!-- slide -->
## Kryptografie

* Discrete Logarithm Problem (DLP)
* $ k*G $ ist einfach, dank `double-and-add`-Algorithmus $ O(\log_2{n}) $
* Umgekehrte Richtung ist schwer

<!-- .slide: class="master03" -->


<!-- slide -->
## Kryptografie

* Primzahlfelder angreifbar über "Index Calculus"-Methode $ O(?) $
* "Gute" elliptische Kurven nicht angreifbar, deshalb viel kleinere Zahlen (256bit ECC ~= 3072bit RSA)
* ECC nur "Baby-step giant-step"-Methode $ O(\sqrt{n}) $

<!-- .slide: class="master03" -->

<!-- slide -->
## Kryptografie

* SECG hat SEC-Kurven definiert und publiziert
* <a href="https://www.secg.org/sec2-v2.pdf">secg.org/sec2-v2.pdf</a>
* Beispiel: `secp256k1` für 256bit ECC (Bitcoin)

<img src="img/slides-07/secp256k1.png" width="40%" />

<!-- .slide: class="master03" -->


<!-- slide -->
## Rechenbeispiel

Live-Demo mit <a href="https://guggero.github.io/cryptography-toolkit">guggero.github.io/cryptography-toolkit</a>
<!-- .slide: class="master03" -->


<!-- slide -->
## Anwendungen

* Diffie-Hellman (Schlüsselaustausch)
* ECDSA (Signaturen)
* Schnorr (Signaturen)
* Verschlüsselung möglich (ECES) aber selten verwendet

<!-- .slide: class="master03" -->


<!-- section -->
## Fragen?

<!-- .slide: class="master01" -->