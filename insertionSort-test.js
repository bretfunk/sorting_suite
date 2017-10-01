var assert = require('chai').assert
var insertionSort = require('./insertionSort')

describe("sorting via insertion", function() {
  it ("sorts via insertion", function() {
    assert.deepEqual(insertionSort([5, 1, 10, 4]), [1, 4, 5, 10])
  });
  it ("sorts via insertion", function() {
    assert.deepEqual(insertionSort([1, 1, 1, 1]), [1, 1, 1, 1])
  });
  it ("sorts via insertion", function() {
    assert.deepEqual(insertionSort([5, 4, 3, 2]), [2, 3, 4, 5])
  });
  it ("sorts via insertion", function() {
    assert.deepEqual(insertionSort([100000, 1, 10, 100]), [1, 10, 100, 100000])
  });
});
