function duplicateEncode(word) {
  const chars = word.toLowerCase().split('')
  const charCount = chars.reduce(
    (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
    {},
  )

  return chars
    .map((char) => {
      const count = charCount[char] || 0
      return count === 1 ? '(' : ')'
    })
    .join('')
}

module.exports = duplicateEncode
