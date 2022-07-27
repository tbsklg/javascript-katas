function anagrams(word, words) {
    const sortedWord = sortLetters(word)

    return words.filter(w => sortedWord === sortLetters(w))
}

function sortLetters(word) {
    return word.split('').sort().join('')
}

module.exports = anagrams
