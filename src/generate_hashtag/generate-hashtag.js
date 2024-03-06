Object.assign(String.prototype, {
  safeHead (fallback = '') {
    return this.head() || fallback
  },
  head () {
    return this.at(0)
  },
  tail () {
    return this.slice(1)
  }
})

const pipe =
  (fn, ...fns) =>
    (...params) =>
      fns.reduce((acc, curr) => curr(acc), fn(...params))

const space = ' '

const notIsSpace = (str) => str !== space

const containsOnlyWhitespaces = (str) => /^\s*$/.test(str)

const parseNotIsEmpty = (str) =>
  str.length !== 0 && !containsOnlyWhitespaces(str) && str

const parseSmallerThan140 = (str) => str && [...str].filter(notIsSpace).length < 140 && str

const capitalize = (str) => str.safeHead().toUpperCase() + str.tail()

const hashify = (str) => str && '#' + str.split(space).map(capitalize).join('')

const parse = pipe(parseNotIsEmpty, parseSmallerThan140)

const generateHashtag = pipe(parse, hashify)

module.exports = generateHashtag
