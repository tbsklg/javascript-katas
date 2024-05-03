const chai = require('chai')
const assert = chai.assert

function runTest(expected, input) {
  assert.strictEqual(
    validParentheses(input),
    expected,
    `Test failed for input: "${input}"`,
  )
}

const validParentheses = require('../../src/valid_parentheses/validParentheses')

describe('Sample tests', function () {
  it('Should return true for valid parentheses', function () {
    runTest(true, '()')
    runTest(true, '((()))')
    runTest(true, '()()()')
    runTest(true, '(()())()')
    runTest(true, '()(())((()))(())()')
  })

  it('Should return false for invalid parentheses', function () {
    runTest(false, ')(')
    runTest(false, '()()(')
    runTest(false, '((())')
    runTest(false, '())(()')
    runTest(false, ')()')
    runTest(false, ')')
  })

  it('Should return true for empty strings', function () {
    runTest(true, '')
  })
})
