function ipsBetween(start, end) {
  return ipTo32Bit(end) - ipTo32Bit(start);
}

const ipTo32Bit = (ip) => {
  return ip.split('.').reduce((acc, val) => acc * 256 + parseInt(val), 0);
};

module.exports = ipsBetween;
