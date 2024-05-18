const chai = require('chai');
const expect = chai.expect;
const printArray = require('../../src/print_array/printArray');

const Test = {
  expect: (actual, expected) => {
    expect(actual).to.equal(expected);
  },
};

describe('Tests', () => {
  it('test', () => {
    const data = [2, 4, 5, 2];
    Test.expect(printArray(data), '2,4,5,2');
  });
});
