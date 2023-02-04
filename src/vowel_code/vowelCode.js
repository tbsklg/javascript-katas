function encode (string) {
  return string.split('')
    .map(c => {
      const index = vowels.indexOf(c)
      return index === -1 ? c : (index + 1)
    })
    .join('')
}

function decode (string) {
  return string.split('')
    .map(c => {
      return isNaN(c) ? c : (vowels[c - 1])
    })
    .join('')
}

const vowels = 'aeiou'

module.exports = {
  decode,
  encode
}
