const countBits = function (n) {
  const toBinary = (x) => {
    if (x === 0) return []

    return [...toBinary(Math.floor(x / 2)), x % 2]
  }

  return toBinary(n).filter((x) => x === 1).length
}

module.exports = countBits
