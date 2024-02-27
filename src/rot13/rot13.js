const rot13 = msg => String.fromCharCode(...[...msg].map(shift13))

const isAlpha = x => /[a-zA-Z]/.test(x)

const shift = size => x => {
  if (!isAlpha(x)) return x.charCodeAt(0)

  const from = x.charCodeAt(0)
  const base = isUpper(x) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0)

  return ((from - base + size) % 26) + base
}

const shift13 = shift(13)

const isUpper = x => x === x.toUpperCase()

module.exports = rot13
