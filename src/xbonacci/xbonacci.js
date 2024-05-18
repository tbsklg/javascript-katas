function Xbonacci(signature, n) {
  if (n < signature.length) return signature.slice(0, n);

  return Array.from({ length: n - signature.length }, (_, v) => v).reduce(
    (acc, curr) => [
      ...acc,
      acc.slice(curr).reduce((acc, curr) => acc + curr, 0),
    ],
    signature,
  );
}

module.exports = Xbonacci;
