function decode (code, n) {
  const encodeNumber = getEncodeNumber(code, digits(n))

  return encodeNumber.map(alphabetPosition).join('')
}

const digits = xs => [...'' + xs].map(Number)
const alphabetPosition = x => 'abcdefghijklmnopqrstuvwxyz'[x - 1]
const getEncodeNumber = (code, n) => code.map((x, i) => x - n[i % n.length])

module.exports = decode
