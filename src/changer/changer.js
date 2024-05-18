function changer(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const shift = (x) => {
    if (alphabet.indexOf(x) === -1) return x;

    if (x === 'z') return 'a';
    return alphabet[alphabet.indexOf(x) + 1];
  };

  const isVowel = (x) => 'aeiou'.indexOf(x) !== -1;

  const words = (x) => x.split(' ');

  const unwords = (x) => x.join(' ');

  const capitalizeIfVowel = (x) => (isVowel(x) ? x.toUpperCase() : x);

  return unwords(
    words(str).map((x) =>
      x
        .split('')
        .map((x) => x.toLowerCase())
        .map((x) => shift(x))
        .map((x) => capitalizeIfVowel(x))
        .join(''),
    ),
  );
}

module.exports = changer;
