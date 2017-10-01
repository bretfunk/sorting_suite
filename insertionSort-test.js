var assert = require('chai').assert
var insertionSort = require('./insertionSort')

describe("sorting via insertion", function() {
  it ("sorts via insertion", function() {
    assert.equal(insertionSort(), "it works")
  });
  });
