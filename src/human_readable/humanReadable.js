function humanReadable (seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds - (h * 3600)) / 60)
  const s = Math.floor(seconds - h * 3600 - m * 60)

  return [format(h), format(m), format(s)].join(':')
}

const format = x => x < 10 ? `0${x}` : x

module.exports = humanReadable
