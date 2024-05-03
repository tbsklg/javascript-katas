function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet
    .split('')
    .reduce((acc, curr) => acc && string.toLowerCase().includes(curr), true)
}

// .every(function(x){
//   return string.indexOf(x) !== -1;
// }

module.exports = isPangram
