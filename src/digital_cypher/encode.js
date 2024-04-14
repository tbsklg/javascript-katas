function encode (str, n) {
  return [...str].map((x, i) => x.charCodeAt() - 96 + +String(n)[i % String(n).length])
}

module.exports = encode
