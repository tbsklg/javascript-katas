const firstNonRepeatingLetter = (s) => {
  const countByChar = chars(s.toLowerCase()).reduce(
    (acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }),
    {},
  );

  return chars(s).find((x) => countByChar[x.toLowerCase()] === 1) || '';
};

const chars = (xs) => [...xs];

module.exports = firstNonRepeatingLetter;
