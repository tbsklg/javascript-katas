describe('tests', function () {
  const { strictEqual } = require('chai').assert
  const humanReadable = require('../../src/human_readable/humanReadable')

  function doTest (seconds, expected) {
    const actual = humanReadable(seconds)
    strictEqual(actual, expected, `for ${seconds} seconds\n`)
  }

  it('sample tests', function () {
    doTest(0, '00:00:00')
    doTest(59, '00:00:59')
    doTest(60, '00:01:00')
    doTest(90, '00:01:30')
    doTest(3599, '00:59:59')
    doTest(3600, '01:00:00')
    doTest(45296, '12:34:56')
    doTest(86399, '23:59:59')
    doTest(86400, '24:00:00')
    doTest(359999, '99:59:59')
  })
})
