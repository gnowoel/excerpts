# excerpts [![Build Status](https://travis-ci.org/gnowoel/excerpts.svg?branch=master)](https://travis-ci.org/gnowoel/excerpts)

Excerpting words or characters of text from an HTML snippet.

## Installation

```
$ npm install excerpts
```

## Usage

Given HTML snippet:

``` html
<p>Lorem <i>ipsum</i> dolor <em>sit</em> amet.</p>
```

### Words

Excerpting words with the `words` option:

```javascript
var excerpts = require('excerpts');
var text = excerpts(html, { words: 3 });
//=> Lorem ipsum dolor...
```

### Characters

Excerpting characters with the `characters` option:

```javascript
var excerpts = require('excerpts');
var text = excerpts(html, { characters: 10 });
//=> Lorem ipsum dol...
```

The `words` option takes precedence over the `characters` option. By default, 50 words will be extracted when options are missing.

### Appendix

The appendix can be customized with the `append` option:

```javascript
var excerpts = require('excerpts');
var text = excerpts(html, { words: 3, append: ' >>' });
//=> Lorem ipsum dolor >>
```

The appendix won't appear when full text has been extracted.

## Tests

```
$ npm install
$ npm test
```

## License

MIT
