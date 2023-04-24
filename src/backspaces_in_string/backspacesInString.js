function cleanString (s) {
  const init = xs => xs.slice(0, xs.length - 1)

  return s.split('').reduce((acc, curr) => {
    if (acc === [] && curr === '#') return []
    if (curr === '#') return init(acc)
    return [...acc, curr]
  }, [])
    .join('')
}

module.exports = cleanString
