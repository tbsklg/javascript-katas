const arrayHelpers = () => {
  /* eslint-disable no-extend-native */
  Array.prototype.square = function () {
    return this.map((x) => x * x)
  }

  Array.prototype.cube = function () {
    return this.map((x) => x * x * x)
  }

  Array.prototype.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0)
  }

  Array.prototype.average = function () {
    return this.sum() / this.length
  }

  Array.prototype.even = function () {
    return this.filter((x) => x % 2 === 0)
  }

  Array.prototype.odd = function () {
    return this.filter((x) => x % 2 !== 0)
  }
  /* eslint-enable no-extend-native */
}

module.exports = arrayHelpers
