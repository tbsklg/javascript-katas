const solution = (text, markers) => {
  const trimmed = text.trimEnd();

  if (trimmed.includes('\n')) {
    return unlines(
      lines(trimmed).map((l) =>
        takeWhile((c) => !markers.includes(c), l)
          .join('')
          .trimEnd(),
      ),
    );
  }

  return takeWhile((c) => !markers.includes(c), trimmed)
    .join('')
    .trimEnd();
};

const lines = (xs) => xs.split('\n');
const unlines = (xs) => xs.join('\n');
const takeWhile = (fn, data) => {
  if (data.length === 0) return [];

  const [x, ...xs] = data;
  return fn(x) ? [x, ...takeWhile(fn, xs)] : [];
};

module.exports = solution;
