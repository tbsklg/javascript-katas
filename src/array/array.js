function array(arr) {
  return arr.split(',').slice(1, -1).join(' ') || null
}

module.exports = array
