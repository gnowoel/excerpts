var $ = require('cheerio');

function excerpts(html, opts) {
  html = String(html);
  opts = prepare(opts);

  var text = $('<p>').html(html).text().trim()
    .replace(/(\r\n|\r|\n|\s)+/g, ' ');

  var excerpt = '';

  if (opts.characters != null) {
    excerpt = text.slice(0, opts.characters);
  }

  if (opts.words != null) {
    excerpt = text.split(' ').slice(0, opts.words).join(' ');
  }

  if (excerpt.length < text.length) {
    excerpt += opts.append;
  }

  return excerpt;
}

function prepare(opts) {
  opts = opts || {};

  if (opts.append == null) {
    opts.append = '...';
  }

  if (!opts.words && !opts.characters) {
    opts.words = 50;
  }

  if (opts.words && opts.characters) {
    delete opts.characters;
  }

  if (opts.words != null) {
    opts.words = parseInt(opts.words, 10);
  }

  if (opts.characters != null) {
    opts.characters = parseInt(opts.characters, 10);
  }

  return opts;
}

module.exports = excerpts;
