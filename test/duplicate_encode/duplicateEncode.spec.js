const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

const duplicateEncode = require('../../src/duplicate_encode/duplicateEncode')

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});
