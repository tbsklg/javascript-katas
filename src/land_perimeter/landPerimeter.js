const landPerimeter = (arr) => prettyPrint(perimeter(landFields(arr)));

const prettyPrint = (perimeter) => `Total land perimeter: ${perimeter}`;

const perimeter = (fields) =>
  fields.reduce((acc, curr) => 4 - neighbours(curr, fields) + acc, 0);

const neighbours = ([i1, j1], fields) =>
  fields.filter(
    ([i2, j2]) =>
      (i1 === i2 && Math.abs(j1 - j2) === 1) ||
      (j1 === j2 && Math.abs(i1 - i2) === 1),
  ).length;

const landFields = (area) => fields(area, 'X');

const fields = (area, field) => {
  return area
    .flatMap((x, i) => [...x].map((_, j) => [j, i]))
    .filter(([j, i]) => [...area[i]][j] === field);
};

module.exports = landPerimeter;
