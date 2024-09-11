function upArray(a) {
  if (a.some((n) => n > 9 || n < 0) || !a.length) return null;

  let i = a.length - 1;
  while (a[i] == 9 && i) (a[i] = 0), i--;

  const n = a[i] + 1;
  a[i] = n > 9 ? [1, 0] : n;

  return a.flat();
}

module.exports = upArray;
