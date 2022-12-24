function disemvowel (str) {
  return str.split('').filter(c => !vowels.includes(c)).join('')
}

const vowels = 'aeiouAEIOU'

module.exports = disemvowel

// return str.replace(/[aeiou]/gi, '');
