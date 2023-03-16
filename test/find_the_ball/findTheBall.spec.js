const { strictEqual } = require('chai').assert
const findTheBall = require('../../src/find_the_ball/findTheBall')

function doTest (start, moves, expected) {
  const log = `for start = ${start} and moves ${JSON.stringify(moves)}\n`
  const actual = findTheBall(start, moves)
  strictEqual(actual, expected, log)
}

describe('sample tests', function () {
  it('An empty swap does nothing', function () {
    doTest(5, [], 5)
  })

  it('Testing with 2 cups', function () {
    doTest(0, [[0, 1]], 1)
    doTest(1, [[0, 1]], 0)
  })

  it('Testing with 3 cups', function () {
    doTest(0, [[0, 1], [2, 1], [0, 1]], 2)
    doTest(0, [[0, 1], [1, 2], [2, 0], [0, 1], [1, 2], [2, 1], [2, 0], [0, 2]], 1)
    doTest(0, [[0, 2], [1, 0]], 2)
    doTest(1, [[0, 2], [1, 0]], 0)
  })

  it('Testing with 10 cups', function () {
    doTest(0, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 2)
    doTest(1, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 1)
    doTest(2, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 8)
    doTest(3, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 9)
    doTest(4, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 5)
    doTest(5, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 4)
    doTest(6, [[0, 9], [9, 3], [3, 7], [7, 8], [8, 2], [4, 5]], 6)
  })
})
