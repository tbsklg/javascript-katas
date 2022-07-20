function sumPairs(ints, s) {
    const visited = new Set([ints[0]])

    for (let i = 1; i < ints.length; i++) {
        const diff = s - ints[i]

        if (visited.has(diff)) return [diff, ints[i]]

        visited.add(ints[i])
    }

    return undefined
}

module.exports = sumPairs
