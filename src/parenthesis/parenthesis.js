function validParentheses (parens) {
  const isValid = (current, n = 0) => {
    if (current.length === 0) return n === 0
    if (n < 0) return false

    const [head, ...tail] = current
    if (head === '(') return isValid(tail, n + 1)
    return isValid(tail, n - 1)
  }

  return isValid(parens)
}

module.exports = validParentheses
