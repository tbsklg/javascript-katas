function isValidIP (str) {
  const parts = str.split('.')

  return parts.length === 4 && parts.every(part => {
    const num = parseInt(part, 10)
    return num >= 0 && num <= 255 && num.toString() === part
  })
}

module.exports = isValidIP
