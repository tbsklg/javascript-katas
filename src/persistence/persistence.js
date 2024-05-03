function persistence(num) {
  const digits = digitsOf(num)
  if (digits.length < 2) return 0

  const nextNumber = digits.reduce((acc, curr) => acc * curr, 1)
  return 1 + persistence(nextNumber)
}

const digitsOf = (num) => {
  if (num === 0) return []
  return [...digitsOf(Math.floor(num / 10)), num % 10]
}

module.exports = persistence
