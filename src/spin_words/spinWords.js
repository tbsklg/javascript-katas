function spinWords (string) {
  const words = string.split(' ')

  const reverse = (word) => word.split('').reverse().join('')

  return words
    .map(word => word.length < 5 ? word : reverse(word))
    .join(' ')
}

module.exports = spinWords
