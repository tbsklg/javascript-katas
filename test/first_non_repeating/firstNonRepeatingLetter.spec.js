const { expect } = require('chai')

const Test = {
  assertEquals: (a, e) => expect(a).to.equal(e),
}

const firstNonRepeatingLetter = require('../../src/first_non_repeating/firstNonRepeatingLetter')

describe('Simple Tests', function () {
  it('should handle simple tests', function () {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a')
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't')
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e')
    Test.assertEquals(
      firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"),
      ',',
    )
  })
})
