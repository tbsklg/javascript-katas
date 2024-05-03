const rot13 = (msg) => String.fromCharCode(...[...msg].map(shift13))

const isAlpha = (x) => /[a-zA-Z]/.test(x)

const shift = (size) => (x) => {
  if (!isAlpha(x)) return x.charCodeAt(0)

  const from = codePoint(x)
  const offset = isUpper(x) ? codePoint('A') : codePoint('a')

  return ((from - offset + size) % alphabetSize) + offset
}

const codePoint = (x) => x.charCodeAt(0)

const alphabetSize = 26

const shift13 = shift(13)

const isUpper = (x) => x === x.toUpperCase()

module.exports = rot13
