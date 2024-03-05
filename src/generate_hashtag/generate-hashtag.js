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
}
)

const generateHashtag = str => validate(str) && hashify(str)

const validate = str => !isEmpty(str) && !greaterThan140(str)

const hashify = str => '#' + str.split(' ').map(capitalize).join('')

const isEmpty = str => str.length === 0 || containsOnlyWhitespaces(str)

const containsOnlyWhitespaces = str => /^\s*$/.test(str)

const greaterThan140 = str => [...str].filter(x => x !== ' ').length > 139

const capitalize = str => str.safeHead().toUpperCase() + str.tail()

module.exports = generateHashtag
