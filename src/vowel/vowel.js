function getCount (str) {
  return str.split('').filter(c => vowels.includes(c+"")).reduce((acc, _) => 1 + acc, 0);
}

const vowels = "aeiou"

module.exports = getCount
