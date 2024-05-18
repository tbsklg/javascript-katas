function revrot(str, sz) {
  if (sz === 0) return '';

  const chunksOf = (size, xs) => {
    if (xs.length < size) return [];
    return [xs.slice(0, size), ...chunksOf(size, xs.slice(size))];
  };

  const shiftLeft = ([x, ...xs]) => {
    return [...xs, x];
  };

  const sumOfCubes = (xs) => xs.reduce((acc, x) => acc + Math.pow(x, 3), 0);

  const reverseOrRotate = ([...digits]) => {
    const isEven = sumOfCubes(digits) % 2 === 0;

    const chunk = isEven ? digits.reverse() : shiftLeft(digits);

    return chunk.join('');
  };

  return chunksOf(sz, str).flatMap(reverseOrRotate).join('');
}

module.exports = revrot;
