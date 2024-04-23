const Test = {
  assertEquals: (curr, exp) => require('chai').expect(curr).to.equal(exp)
}

const shortenNumber = require('../../src/shorten_number/shortenNumber')

describe('Basic tests', () => {
  const filter1 = shortenNumber(['', 'k', 'm'], 1000)
  Test.assertEquals(filter1('234324'), '234k')
  Test.assertEquals(filter1('98234324'), '98m')
  Test.assertEquals(filter1([1, 2, 3]), '1,2,3')
  Test.assertEquals(filter1(''), '')
  Test.assertEquals(filter1('32424234223'), '32424m')
  const filter2 = shortenNumber(['', 'KB', 'MB', 'GB'], 1024)
  Test.assertEquals(filter2('32'), '32')
  Test.assertEquals(filter2('2100'), '2KB')
  Test.assertEquals(filter2('pippi'), 'pippi')
  Test.assertEquals(filter2('2100k'), '2100k')
  Test.assertEquals(filter2('1073741823'), '1023MB')
})
