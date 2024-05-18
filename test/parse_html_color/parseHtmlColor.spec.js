const { expect } = require('chai');

const parseHTMLColor = require('../../src/parse_html_color/parseHtmlColor');

const assertColorEquals = (current, expected) =>
  expect(current).to.eql(expected);

describe('Example tests', () => {
  it('should parse example colors', () => {
    assertColorEquals(parseHTMLColor('#80FFA0'), { r: 128, g: 255, b: 160 });
    assertColorEquals(parseHTMLColor('#3B7'), { r: 51, g: 187, b: 119 });
    assertColorEquals(parseHTMLColor('LimeGreen'), { r: 50, g: 205, b: 50 });
  });
});
