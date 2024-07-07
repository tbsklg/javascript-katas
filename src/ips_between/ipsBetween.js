function ipsBetween(start, end) {
  return as32Bit(end) - as32Bit(start);
}

const as32Bit = (ip) => {
  return ip.split('.').reduce((acc, val) => acc * 256 + parseInt(val), 0);
};

module.exports = ipsBetween;
