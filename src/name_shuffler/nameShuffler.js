function nameShuffler(str) {
    return `${str.split(" ")[1]} ${str.split(" ")[0]}`
    // return str.split(' ').reverse().join(' ')
}

module.exports = nameShuffler
