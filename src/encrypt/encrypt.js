function encrypt(text, rule) {
  if (text === '') return ''

  const shiftChar = (c) => {
    const shift = c.charCodeAt(0) + rule
    const shift255 = shift > 255 ? shift % 256 : shift
    return String.fromCharCode(shift255)
  }

  return text
    .split('')
    .map((c) => shiftChar(c))
    .join('')
}

module.exports = encrypt
