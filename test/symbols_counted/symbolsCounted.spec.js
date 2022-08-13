const chai = require('chai')
const expect = chai.expect

const Test = {
    assertEquals(actual, expected) {
        expect(actual).to.equal(expected)
    }
}

const transform = require('../../src/symbols_counted/symbolsCounted')

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(transform('transplantology'), 't2ra2n2spl2o2gy');
        Test.assertEquals(transform('elevation'), 'e2lvation');
        Test.assertEquals(transform('economics'), 'ec2o2nmis');
        Test.assertEquals(transform('embarrassed'), 'e2mba2r2s2d');
        Test.assertEquals(transform('impressive'), 'i2mpre2s2v');
    });
});
