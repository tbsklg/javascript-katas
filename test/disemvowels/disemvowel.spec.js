const { assert } = require('chai')

const disemvowel = require('../../src/disemvowel/diesmvowel')

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(
      disemvowel('This website is for losers LOL!'),
      'Ths wbst s fr lsrs LL!',
    )
    assert.strictEqual(
      disemvowel(
        "No offense but,\nYour writing is among the worst I've ever read",
      ),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd",
    )
    assert.strictEqual(
      disemvowel('What are you, a communist?'),
      'Wht r y,  cmmnst?',
    )
  })
})
