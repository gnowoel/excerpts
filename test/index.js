var fs = require('fs');
var path = require('path');
var assert = require('chai').assert;
var excerpts = require('..');

var html = fs.readFileSync(path.join(__dirname, 'snippet.html'), 'utf8');

describe('excerpts(html, opts)', function() {
  it('should extract 50 words by default', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'default.txt'), 'utf8');
    var excerpt = excerpts(html);

    assert.equal(excerpt, text.trim());

    done();
  });

  it('should extract specified words', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');
    var excerpt = excerpts(html, { words: 10 });

    assert.equal(excerpt, text.trim());

    done();
  });

  it('should accept either number or string options', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');
    var excerpt = excerpts(html, { words: '10' });

    assert.equal(excerpt, text.trim());

    done();
  });

  it('should extract specified characters', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'characters.txt'), 'utf8');
    var excerpt = excerpts(html, { characters: 30 });

    assert.equal(excerpt, text.trim());

    done();
  });

  it('should honor words over characters', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');
    var excerpt = excerpts(html, { characters: 30, words: 10 });

    assert.equal(excerpt, text.trim());

    done();
  });

  if ('should replace newlines with a space', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'full.txt'), 'utf8');
    var excerpt = excerpts(html, { words: 10000 });

    assert.equal(excerpt, text.trim());
    assert.euqal(/\n/.test(excerpt), false);

    done();
  });

  it('should append ellipses to an excerpt by default', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'words.txt'), 'utf8');
    var excerpt = excerpts(html, { words: 10 });

    assert.equal(excerpt, text.trim());
    assert.equal(/\.{3}$/.test(excerpt.trim()). true);

    done();
  });

  it('should customize appendix', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'append.txt'), 'utf8');
    var excerpt = excerpts(html, { words: 10, append: ' >>' });

    assert.equal(excerpt, text.trim());
    assert.equal(/ >>$/.test(excerpt.trim()). true);

    done();
  });


  it('should omit trailing ellipses for full text', function(done) {
    var text = fs.readFileSync(path.join(__dirname, 'full.txt'), 'utf8');
    var excerpt = excerpts(html, { words: 10000 });

    assert.equal(excerpt, text.trim());
    assert.equal(/\.{3}$/.test(excerpt). false);

    done();
  });
});
