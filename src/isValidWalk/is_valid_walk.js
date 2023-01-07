function isValidWalk (walk) {
  if (walk.length > 10) {
    return false
  }

  const end = walk.reduce((acc, curr) => {
    const [x, y] = acc

    if (curr === 'n') {
      return [x + 1, y]
    }

    if (curr === 's') {
      return [x - 1, y]
    }

    if (curr === 'w') {
      return [x, y - 1]
    }

    if (curr === 'e') {
      return [x, y + 1]
    }

    return acc
  }, [0, 0])

  const [x, y] = end
  return x === 0 && y === 0
}

module.exports = isValidWalk
