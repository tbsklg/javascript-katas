function palindrome (num) {
  if (typeof num === 'string' || num % 1 !== 0 || num < 0) return 'Not valid'

  const isPalindrome = (xs) => xs === xs.split('').reverse().join('')
  const init = (xs) => xs.slice(0, xs.length - 1)
  const tail = (xs) => xs.slice(1)

  const containsPalindrome = (xs) => {
    if (xs.length === 1) return false
    return isPalindrome(xs) || containsPalindrome(init(xs)) || containsPalindrome(tail(xs))
  }

  const numAsString = num.toString()
  return containsPalindrome(numAsString)
}

// regex for the rescue: '(\d)\d?\1'
// 1st Capturing Group (\d)
// \d matches a digit (equivalent to [0-9])
// \d matches a digit (equivalent to [0-9])
// ? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
// \1 matches the same text as most recently matched by the 1st capturing group
module.exports = palindrome
