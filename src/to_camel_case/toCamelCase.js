function toCamelCase(str) {
  const [head, ...tail] = str.split(/[_-]/)
  return [
    head,
    ...tail.map(([first, ...rest]) => [first.toUpperCase(), ...rest].join('')),
  ].join('')
}

module.exports = toCamelCase
