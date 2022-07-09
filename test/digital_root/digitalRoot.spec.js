const chai = require('chai')
const expect = chai.expect

const Test = {
    assertEquals (actual, expected) {
        expect(actual).to.equal(expected)
    }
}

const digital_root = require('../../src/digital_root/digitalRoot').digital_root;
const digits = require('../../src/digital_root/digitalRoot').digits;

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals( digital_root(16), 7 )
        Test.assertEquals( digital_root(456), 6 )
    });

    it("should return digits", () => {
        expect(digits(12)).to.eql([1, 2])
        expect(digits(0)).to.eql([0])
        expect(digits(1234)).to.eql([1, 2, 3, 4])
    })
});
