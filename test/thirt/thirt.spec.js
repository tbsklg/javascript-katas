const chai = require('chai')
const expect = chai.expect

const thirt = require('../../src/thirt/thirt')

const Test = {
  assertEquals: (actual, expected) => expect(actual).to.equal(expected)
}

describe('thirt', function () {
  it('Basic tests', function () {
    Test.assertEquals(thirt(8529), 79)
    Test.assertEquals(thirt(85299258), 31)
    Test.assertEquals(thirt(5634), 57)
    Test.assertEquals(thirt(1111111111), 71)
    Test.assertEquals(thirt(987654321), 30)
  })
})
