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

module.exports = palindrome
