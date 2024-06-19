// setReducer
function setReducer(input) {
  if (input.length === 0) return [];
  if (input.length === 1) return input[0];

  return setReducer(group(input).map((x) => x.length));
}

const takeWhile = (xs, f) => {
  const [x, ...tail] = xs;

  if (x === undefined || !f(x)) return [];

  return [x, ...takeWhile(tail, f)];
};

const dropWhile = (xs, f) => {
  const [x, ...tail] = xs;

  if (x === undefined || !f(x)) return xs;

  return dropWhile(tail, f);
};

const group = (xs) => {
  const [x] = xs;

  if (x === undefined) return [];

  return [
    takeWhile(xs, (y) => y === x),
    ...group(dropWhile(xs, (y) => y === x)),
  ];
};

module.exports = setReducer;
