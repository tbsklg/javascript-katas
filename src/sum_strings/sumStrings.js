function sumStrings(a, b) {
  if (a === '') {
    return b;
  }
  if (b === '') {
    return a;
  }

  const x = a.split('').reverse();
  const y = b.split('').reverse();

  const res =  addRecursive(x, y, 0).reverse()
  return res.slice(res[0] === 0 ? 1 : 0).join('');
}

function addRecursive(x, y, carry) {
  if (x.length === 0 && y.length === 0 && carry === 0) {
    return [];
  }

  const xDigit = x.length > 0 ? +x.shift() : 0;
  const yDigit = y.length > 0 ? +y.shift() : 0;
  const sum = xDigit + yDigit + carry;

  return [sum % 10, ...addRecursive(x, y, sum >= 10 ? 1 : 0)];
}

module.exports = sumStrings
