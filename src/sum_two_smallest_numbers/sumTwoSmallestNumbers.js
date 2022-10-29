function sumTwoSmallestNumbers (numbers) {
  const [first, second] = numbers.sort((a, b) => a - b)
  return first + second
}

module.exports = sumTwoSmallestNumbers
