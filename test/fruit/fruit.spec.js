const chai = require('chai')
const expect = chai.expect

const Test = {
  assertEquals(actual, expected) {
    expect(actual).to.equal(expected)
  },
}

const fruit = require('../../src/fruit/fruit')

describe('Fruit Machine', () => {
  it('should return 100', () => {
    const reel = [
      'Wild',
      'Star',
      'Bell',
      'Shell',
      'Seven',
      'Cherry',
      'Bar',
      'King',
      'Queen',
      'Jack',
    ]
    const spin = [0, 0, 0]
    Test.assertEquals(
      fruit([reel, reel, reel], spin),
      100,
      "Should return: '100'",
    )
  })

  it('should reutrn 0', () => {
    const reel1 = [
      'Wild',
      'Star',
      'Bell',
      'Shell',
      'Seven',
      'Cherry',
      'Bar',
      'King',
      'Queen',
      'Jack',
    ]
    const reel2 = [
      'Bar',
      'Wild',
      'Queen',
      'Bell',
      'King',
      'Seven',
      'Cherry',
      'Jack',
      'Star',
      'Shell',
    ]
    const reel3 = [
      'Bell',
      'King',
      'Wild',
      'Bar',
      'Seven',
      'Jack',
      'Shell',
      'Cherry',
      'Queen',
      'Star',
    ]
    const spin = [5, 4, 3]
    Test.assertEquals(
      fruit([reel1, reel2, reel3], spin),
      0,
      "Should return: '0'",
    )
  })

  it('should return 3', () => {
    const reel1 = [
      'King',
      'Cherry',
      'Bar',
      'Jack',
      'Seven',
      'Queen',
      'Star',
      'Shell',
      'Bell',
      'Wild',
    ]
    const reel2 = [
      'Bell',
      'Seven',
      'Jack',
      'Queen',
      'Bar',
      'Star',
      'Shell',
      'Wild',
      'Cherry',
      'King',
    ]
    const reel3 = [
      'Wild',
      'King',
      'Queen',
      'Seven',
      'Star',
      'Bar',
      'Shell',
      'Cherry',
      'Jack',
      'Bell',
    ]
    const spin = [0, 0, 1]
    Test.assertEquals(
      fruit([reel1, reel2, reel3], spin),
      3,
      "Should return: '3'",
    )
  })

  it('should return 6', () => {
    const reel1 = [
      'King',
      'Jack',
      'Wild',
      'Bell',
      'Star',
      'Seven',
      'Queen',
      'Cherry',
      'Shell',
      'Bar',
    ]
    const reel2 = [
      'Star',
      'Bar',
      'Jack',
      'Seven',
      'Queen',
      'Wild',
      'King',
      'Bell',
      'Cherry',
      'Shell',
    ]
    const reel3 = [
      'King',
      'Bell',
      'Jack',
      'Shell',
      'Star',
      'Cherry',
      'Queen',
      'Bar',
      'Wild',
      'Seven',
    ]
    const spin = [0, 5, 0]
    Test.assertEquals(
      fruit([reel1, reel2, reel3], spin),
      6,
      "Should return: '6'",
    )
  })
})
