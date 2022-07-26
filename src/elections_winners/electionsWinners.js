function electionsWinners(votes, k) {
    if (k === 0) return findWinnerFromVotes(votes)

    return findWinnerFromVotesWithAddtionalVotes(votes, k)
}

function findWinnerFromVotes(votes) {
    const maximumVotes = Math.max(...votes);

    const numberOfWinners = votes
        .filter(v => v === maximumVotes)
        .length

    return numberOfWinners === 1 ? 1 : 0
}

function findWinnerFromVotesWithAddtionalVotes(votes, k) {
    const maximumVotes = Math.max(...votes);

    return votes
        .filter(v => v + k > maximumVotes)
        .length
}

module.exports = electionsWinners
