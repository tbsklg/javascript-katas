function squareDigits(num){
  return Number.parseInt(num.toString().split('').map(x => Number.parseInt(x)).map(x => x * x).join(''))
}

module.exports = squareDigits;
