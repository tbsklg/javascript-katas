const chai = require('chai');
const expect = chai.expect;

const Test = {
  assertEquals(actual, expected) {
    expect(actual).to.equal(expected);
  },
};

const nameShuffler = require('../../src/name_shuffler/nameShuffler');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(nameShuffler('john McClane'), 'McClane john');
  });
});
