function findOutlier (integers) {
  const [even, ...evens] = integers.filter(x => x % 2 === 0)
  const [odd] = integers.filter(x => x % 2 !== 0)

  if (evens.length === 0) return even
  return odd
}

module.exports = findOutlier
