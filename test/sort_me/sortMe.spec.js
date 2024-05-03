const { assert } = require('chai')

const sortme = require('../../src/sort_me/sortMe')

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.deepEqual(sortme(['Hello', 'there', "I'm", 'fine']), [
      'fine',
      'Hello',
      "I'm",
      'there',
    ])
    assert.deepEqual(sortme(['C', 'd', 'a', 'B']), ['a', 'B', 'C', 'd'])
    assert.deepEqual(sortme(['CodeWars']), ['CodeWars'])
    assert.deepEqual(sortme([]), [])
    assert.deepEqual(
      sortme([
        'Eye',
        'Old',
        'Use',
        'Public',
        'an',
        'important',
        'person',
        'first',
        'last',
        'long',
        'Up',
        'Not',
        'young',
        'this',
        'my',
        'or',
        'Look',
        'case',
        'Would',
        'Important',
      ]),
      [
        'an',
        'case',
        'Eye',
        'first',
        'important',
        'Important',
        'last',
        'long',
        'Look',
        'my',
        'Not',
        'Old',
        'or',
        'person',
        'Public',
        'this',
        'Up',
        'Use',
        'Would',
        'young',
      ],
    )
  })
})
