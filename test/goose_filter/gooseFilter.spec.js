const chai = require('chai');
const expect = chai.expect;

const Test = {
  assertDeepEquals(actual, expected) {
    expect(actual).to.deep.equals(expected);
  },
};

const gooseFilter = require('../../src/goose_filter/gooseFilter');

describe('Basic tests', function () {
  it('Mixed list', function () {
    Test.assertDeepEquals(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ]),
      ['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'],
    );
  });
  it('No geese', function () {
    Test.assertDeepEquals(
      gooseFilter([
        'Mallard',
        'Barbary',
        'Hook Bill',
        'Blue Swedish',
        'Crested',
      ]),
      ['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'],
    );
  });
  it('All geese', function () {
    Test.assertDeepEquals(
      gooseFilter([
        'African',
        'Roman Tufted',
        'Toulouse',
        'Pilgrim',
        'Steinbacher',
      ]),
      [],
    );
  });
});
