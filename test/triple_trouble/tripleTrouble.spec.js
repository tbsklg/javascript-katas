const Test = {
  assertEquals: (act, exp) => require('chai').expect(act).to.equal(exp)
}

const tripledouble = require('../../src/triple_trouble/tripleTrouble')

describe('Initial Tests', () => {
  Test.assertEquals(tripledouble(451999277, 41177722899), 1)
  Test.assertEquals(tripledouble(1222345, 12345), 0)
  Test.assertEquals(tripledouble(12345, 12345), 0)
  Test.assertEquals(tripledouble(666789, 12345667), 1)
  Test.assertEquals(tripledouble(10560002, 100), 1)
  Test.assertEquals(tripledouble(1112, 122), 0)
})
