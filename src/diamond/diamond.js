function diamond(n) {
  if (n % 2 === 0 || n < 1) return null;

  if (n === 1) return '*\n';

  const draw = (i) => {
    if (i === n) return '*'.repeat(i).concat('\n');

    const stars = '*'.repeat(i).concat('\n');
    const spaces = ' '.repeat((n - i) / 2);
    const part = spaces.concat(stars);
    return part.concat(...draw(i + 2)).concat(part);
  };

  return draw(1);
}

module.exports = diamond;
