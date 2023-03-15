function encrypt (text, n) {
  if (!text || n <= 0) return text

  const odds = text.split('').filter((_, i) => i % 2 !== 0).join('')
  const evens = text.split('').filter((_, i) => i % 2 === 0).join('')

  return encrypt((odds + evens), (n - 1))
}

function decrypt (encryptedText, n) {
  if (n <= 0) return encryptedText

  const numberOfOdds = Math.floor(encryptedText.length / 2)

  const oddPart = encryptedText.slice(0, numberOfOdds)
  const evenPart = encryptedText.slice(numberOfOdds)

  const transpose = ([x, ...xs], [y, ...ys]) => {
    if (x === undefined && y === undefined) return []
    if (x === undefined) return [y, ...ys]
    if (y === undefined) return [x, ...xs]

    return [x, y, ...transpose(xs, ys)]
  }

  return decrypt(transpose(evenPart.split(''), oddPart.split('')).join(''), (n - 1))
}

module.exports = { encrypt, decrypt }
