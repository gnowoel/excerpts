# excerpts [![Build Status](https://travis-ci.org/gnowoel/excerpts.svg?branch=master)](https://travis-ci.org/gnowoel/excerpts)

Excerpting text of given words or characters from HTML.

## Installation

```
$ npm install excerpts
```

## Usage

Given HTML:

``` html
<p>Lorem <i>ipsum</i> dolor <em>sit</em> amet.</p>
```

### Words

Excerpting words with `words` option:

```javascript
var excerpts = require('excerpts');

var text = excerpts(html, { words: 3 });

//=> Lorem ipsum dolor...
```

### Characters

Excerpting characters with `characters` option:

```javascript
var excerpts = require('excerpts');

var text = excerpts(html, { characters: 10 });

//=> Lorem ipsum dol...
```

The `words` option takes precedence over the `characters` option. With missing option, 50 words would be extracted by default.

### Appendix

The appendix can be customized with the `append` option:

```javascript
var excerpts = require('excerpts');

var text = excerpts(html, { words: 3, append: " >>" });

//=> Lorem ipsum dolor >>
```

The appendix won't appear when full text are extracted.

## Tests

```
$ npm install
$ npm test
```

## License

MIT
