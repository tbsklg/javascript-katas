function factorial(n) {
  if (n < 0 || n > 12) throw RangeError()

  if (n === 0) return 1

  return n * factorial(n - 1)
}

module.exports = factorial
