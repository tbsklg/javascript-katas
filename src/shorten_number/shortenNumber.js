const shortenNumber = (suffixes, base) => {
  return (x) => {
    if (isNaN(x) || x === '') return '' + x

    const power = Math.min(Math.floor(getBaseLog(base, x)), suffixes.length - 1)

    return Math.floor(x / Math.pow(base, power)) + suffixes[power]
  }
}

const getBaseLog = (x, y) => Math.log(y) / Math.log(x)

module.exports = shortenNumber
