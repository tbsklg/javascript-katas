function uefaEuro2016([homeTeam, awayTeam], [homeScores, awayScores]) {
  const match = `At match ${homeTeam} - ${awayTeam}`;
  const isDraw = homeScores === awayScores;
  if (isDraw) return `${match}, teams played draw.`;

  const winner = homeScores > awayScores ? homeTeam : awayTeam;

  return `${match}, ${winner} won!`;
}

module.exports = uefaEuro2016;
