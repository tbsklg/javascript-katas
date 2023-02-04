const { assert } = require('chai')

const validParentheses = require('../../src/parenthesis/parenthesis')

describe('Tests', () => {
  it('values: "("', () => assert.strictEqual(validParentheses('('), false))
  it('values: ")"', () => assert.strictEqual(validParentheses(')'), false))
  it('values: ""', () => assert.strictEqual(validParentheses(''), true))
  it('values: "()"', () => assert.strictEqual(validParentheses('()'), true))
  it('values: "())"', () => assert.strictEqual(validParentheses('())'), false))
})
