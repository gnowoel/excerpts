var downsize = require('downsize');
var htmlToText = require('html-to-text');

function excerpts(html, opts) {
  opts = opts || {};

  opts.append = '...';

  if (!opts.words && !opts.characters) {
    opts.words = 50;
  }

  if (opts.words && opts.characters) {
    delete opts.characters;
  }

  var text;

  text = htmlToText.fromString(html, {
    wordwrap: false,
    ignoreHref: true,
    ignoreImage: true
  });

  text = downsize(text, opts);

  text = text.replace(/(\r\n|\r|\n)+/g, ' ');

  return text;
}

module.exports = excerpts;
