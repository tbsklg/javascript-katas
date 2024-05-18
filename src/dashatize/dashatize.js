function dashatize(num) {
  if (num === 0) return '0';

  return trimWith(
    '-',
    digits(Math.abs(num)).map(dash).join('').replaceAll('--', '-'),
  );
}

//return String(num)
//    .replace(/([13579])/g, "-$1-")
//    .replace(/--+/g, "-")
//    .replace(/(^-|-$)/g, "")

const trimWith = (x, xs) => {
  return dropWhile((y) => y === x, dropWhile((y) => y === x, [...xs]).reverse())
    .reverse()
    .join('');
};

const dropWhile = (fn, xs) => {
  if (xs.length === 0) return [];

  const [x, ...next] = xs;
  if (fn(x)) return dropWhile(fn, next);

  return xs;
};

const dash = (x) => {
  if (even(x)) return x;
  return `-${x}-`;
};

const digits = (x) => {
  if (x === 0) return [];

  return [...digits(Math.floor(x / 10)), x % 10];
};

const even = (x) => x % 2 === 0;

module.exports = dashatize;
