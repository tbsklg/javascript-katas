function digital_root(n) {
    if (n < 10) return n

    return digital_root(digits(n).reduce((pre, curr) => pre + curr))
}

function digits(n) {
    return ("" + n).split("").map(a => parseInt(a));
}

module.exports = {
    digital_root,
    digits,
}
