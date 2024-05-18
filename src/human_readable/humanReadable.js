const humanReadable = (seconds) => {
  const h = parseInt(seconds / 3600);
  const m = parseInt(seconds / 60) % 60;
  const s = seconds % 60;

  return [format(h), format(m), format(s)].join(':');
};

const format = (x) => (x < 10 ? `0${x}` : x);

module.exports = humanReadable;
