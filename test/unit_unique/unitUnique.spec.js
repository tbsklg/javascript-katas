const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const uniteUnique = require('../../src/unit_unique/unitUnique.js')

describe("Basic tests",() =>{
  it("Tests", () => {
    assert.deepEqual(uniteUnique([1, 2], [3, 4]),[1, 2, 3, 4]);
    assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),[1, 3, 2, 5, 4]);
    assert.deepEqual(uniteUnique([4, 3, 2, 2]),[4, 3, 2]);
    assert.deepEqual(uniteUnique([4, "a", 2], []),[4, "a", 2]);
    assert.deepEqual(uniteUnique([], [4, "a", 2]),[4, "a", 2]);
    assert.deepEqual(uniteUnique([], [4, "a", 2], []),[4, "a", 2]);
    assert.deepEqual(uniteUnique([]),[]);
    assert.deepEqual(uniteUnique([],[]),[]);
    assert.deepEqual(uniteUnique([],[1, 2]),[1, 2]);
    assert.deepEqual(uniteUnique([],[1, 2, 1, 2],[2, 1, 1, 2, 1]),[1, 2]);
  })
})
