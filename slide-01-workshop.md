
![Puzzle ITC Logo](lib/img/puzzle_tagline_bg_rgb.svg)
<!-- .slide: class="master01" -->

<!-- section -->
#Reveal.js rocks!
How does it work? <br>
<small>use your arrows to navigate vertically or horizontally</small>
<!-- .slide: class="master04" -->

<!-- slide -->
##Installation
Some reveal.js features, like external Markdown and speaker notes, require that presentations run from a local web server.

<!-- slide -->
Install [Node.js](http://nodejs.org/)

Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)
```sh
$ sudo npm install -g grunt-cli
```

Clone the template repository
```sh
$ git clone https://git.puzzle.ch/users/pfritsch/pitc-revealjs.git
```

<!-- slide -->
Navigate to the reveal.js folder
```sh
$ cd pitc-revealjs
```

Install dependencies
```sh
$ npm install
```

And Serve the presentation and monitor source files for changes
```sh
$ grunt serve
```

<!-- slide -->
##That's it, you're in!

<!-- section -->
#Puzzle template
You don't have to care about styles. <br>
Focus on your content!
<!-- .slide: class="master05" -->

<!-- slide -->
##All in one file
Edit this presentation easily with just one [Markdown file](https://guides.github.com/features/mastering-markdown/). Open `presentation.md`, edit and save it: your browser should refresh instantly.

<!-- slide -->
##Structure with tags
Manage your sections (horizontal) <br>and slides (vertical) with tags:

```
<@!-- section -->
# First section, first slide (horizontal)
<@!-- slide -->
## First section, second slide (vertical)

<@!-- section -->
# Second section, first slide (horizontal)
```
<small>(remove the @)</small>

<!-- slide -->
##Make it prettier with classes
Give your slide a background color by adding a css class:

* master01: dark blue
* master02: blue
* master03: light blue
* master04: turquoise
* master05: green

<!-- slide -->
Just add this tag under your slides:
```
<@!-- section -->
# First section, first slide with blue background
<@!-- .slide: class="master01" -->
```
<small>(remove the @)</small>