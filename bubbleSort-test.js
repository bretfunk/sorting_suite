const assert = require('chai').assert
const bubbleSort2 = require('./bubbleSort')

describe("bubble sort sorts", function() {
  it("sorts ascending order", function() {
    assert.deepEqual(bubbleSort2([3,2,1]), [1, 2, 3])
    assert.deepEqual(bubbleSort2([2,3,1]), [1, 2, 3])
    assert.deepEqual(bubbleSort2([1,1,1]), [1, 1, 1])
    assert.deepEqual(bubbleSort2([10,5,20]), [5, 10, 20])
  })
})
