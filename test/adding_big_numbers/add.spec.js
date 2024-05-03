const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals(actual, expected) {
    expect(actual).to.equal(expected)
  },
}

const add = require('../../src/adding_big_numbers/add')

describe('Add two numbers', function () {
  it('should pass basic tests', function () {
    Test.assertEquals(add('1', '1'), '2')
    Test.assertEquals(add('123', '456'), '579')
    Test.assertEquals(add('888', '222'), '1110')
    Test.assertEquals(add('1372', '69'), '1441')
    Test.assertEquals(add('12', '456'), '468')
    Test.assertEquals(add('101', '100'), '201')
    Test.assertEquals(
      add('63829983432984289347293874', '90938498237058927340892374089'),
      '91002328220491911630239667963',
    )
  })
})
