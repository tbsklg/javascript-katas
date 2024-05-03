const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return [...text]
    .map((x) => alphabet.indexOf(x.toLowerCase()) + 1)
    .filter((x) => x !== 0)
    .join(' ')
}

module.exports = alphabetPosition
