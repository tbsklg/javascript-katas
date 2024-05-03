function mineLocation(field) {
  return (
    field
      .map((row, rowIndex) => [rowIndex, row.indexOf(1)])
      .find(([rowIndex, columnIndex]) => columnIndex !== -1) || []
  )
}

module.exports = mineLocation
