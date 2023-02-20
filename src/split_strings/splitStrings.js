function solution (str) {
  if (str.length === 0) return []

  const chunksOfTwo = xs => xs.match(/.{1,2}/g)

  if (str.length % 2 === 0) return chunksOfTwo(str)

  return chunksOfTwo(str + '_')
}

module.exports = solution
