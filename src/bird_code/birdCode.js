function birdCode(arr) {
  const birdNames = arr.map((birdName) => birdName.split(/-| /))
  return birdNames
    .map((parts) => {
      if (parts.length === 1) return parts[0].slice(0, 4)
      if (parts.length === 2)
        return parts.map((part) => part.slice(0, 2)).join('')
      if (parts.length === 3)
        return parts[0]
          .slice(0, 1)
          .concat(parts[1].slice(0, 1))
          .concat(parts[2].slice(0, 2))
      if (parts.length === 4)
        return parts.map((part) => part.slice(0, 1)).join('')
      throw new Error('Could not create bird code')
    })
    .map((code) => code.toUpperCase())
}

module.exports = birdCode
