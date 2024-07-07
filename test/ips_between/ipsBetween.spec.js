const strictEqual = require('chai').assert.strictEqual;

function doTest(start, end, expected) {
  const actual = ipsBetween(start, end);
  strictEqual(actual, expected, `for start = ${start}, end = ${end}\n`);
}

const ipsBetween = require('../../src/ips_between/ipsBetween');

describe('Tests', () => {
  it('sample tests', () => {
    doTest('150.0.0.0', '150.0.0.1', 1);
    doTest('10.0.0.0', '10.0.0.50', 50);
    doTest('20.0.0.10', '20.0.1.0', 246);
    doTest('10.11.12.13', '10.11.13.0', 243);
    doTest('160.0.0.0', '160.0.1.0', 256);
    doTest('170.0.0.0', '170.1.0.0', 65536);
    doTest('50.0.0.0', '50.1.1.1', 65793);
    doTest('180.0.0.0', '181.0.0.0', 16777216);
    doTest('1.2.3.4', '5.6.7.8', 67372036);
    doTest('0.0.0.0', '255.255.255.255', 2 ** 32 - 1);
  });
});
