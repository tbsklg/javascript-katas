const chai = require('chai')
const expect = chai.expect

const Test = {
    assertEquals (actual, expected) {
        expect(actual).to.equal(expected)
    }
}

const incrementString = require('../../src/increment_string/incrementString')

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(incrementString("foobar000"), "foobar001");
        Test.assertEquals(incrementString("foo"), "foo1");
        Test.assertEquals(incrementString("foobar001"), "foobar002");
        Test.assertEquals(incrementString("foobar99"), "foobar100");
        Test.assertEquals(incrementString("foobar099"), "foobar100");
        Test.assertEquals(incrementString("foobar00999"), "foobar01000");
        Test.assertEquals(incrementString("009"), "010");
        Test.assertEquals(incrementString("1"), "2");
        Test.assertEquals(incrementString(""), "1");
    });
});
