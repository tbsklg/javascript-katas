const generateHashtag = str => validate(str) && hashify(str)

const validate = str => !isEmpty(str) && !greaterThan140(str)

const hashify = str => '#' + str.split(' ').map(capitalize).join('')

const isEmpty = str => str.length === 0 || containsOnlyWhitespaces(str)

const containsOnlyWhitespaces = str => /^\s*$/.test(str)

const greaterThan140 = str => [...str].filter(x => x !== ' ').length > 139

const capitalize = str => safeHead(str).toUpperCase() + tail(str)

const safeHead = (str, fallback = '') => str.at(0) || fallback

const tail = str => str.slice(1)

module.exports = generateHashtag
