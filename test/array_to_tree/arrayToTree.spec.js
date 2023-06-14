const { assert } = require('chai')

const Test = {
  assertEquals: assert.deepEqual
}

const { arrayToTree, TreeNode } = require('../../src/array_to_tree/arrayToTree.js')

describe('arrayToTree', function () {
  it('empty array', function () {
    const array = []
    const expected = undefined
    test(array, expected)
  })

  it('array with multiple elements', function () {
    const array = [17, 0, -4, 3, 15]
    const expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4))
    test(array, expected)
  })
})

function test (array, expected) {
  Test.assertEquals(JSON.stringify(arrayToTree(array)), JSON.stringify(expected))
};
