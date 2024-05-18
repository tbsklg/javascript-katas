// You can use `chai` for assertions.
const chai = require('chai');
const assert = chai.assert;

chai.config.truncateThreshold = 0;

const {
  validateSudoku,
  rotate,
} = require('../../src/validate_sudoku/validateSudoku');

describe('Tests', function () {
  const fixedBoards = [
    [
      [
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
      ],
      false,
    ], // A board full of fives
    [
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ],
      false,
    ], // All rows are 1..9
    [
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [6, 6, 6, 6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
      ],
      false,
    ], // All cols are 1..9
    [
      [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ],
      true,
    ],
    [
      [
        [1, 3, 2, 5, 7, 9, 4, 6, 8],
        [4, 9, 8, 2, 6, 1, 3, 7, 5],
        [7, 5, 6, 3, 8, 4, 2, 1, 9],
        [6, 4, 3, 1, 5, 8, 7, 9, 2],
        [5, 2, 1, 7, 9, 3, 8, 4, 6],
        [9, 8, 7, 4, 2, 6, 5, 3, 1],
        [2, 1, 4, 9, 3, 5, 6, 8, 7],
        [3, 6, 5, 8, 1, 7, 9, 2, 4],
        [8, 7, 9, 6, 4, 2, 1, 5, 3],
      ],
      true,
    ],
    [
      [
        [7, 8, 4, 1, 5, 9, 3, 2, 6],
        [5, 3, 9, 6, 7, 2, 8, 4, 1],
        [6, 1, 2, 4, 3, 8, 7, 5, 9],
        [9, 2, 8, 7, 1, 5, 4, 6, 3],
        [3, 5, 7, 8, 4, 6, 1, 9, 2],
        [4, 6, 1, 9, 2, 3, 5, 8, 7],
        [8, 7, 6, 3, 9, 4, 2, 1, 5],
        [2, 4, 3, 5, 6, 1, 9, 7, 8],
        [1, 9, 5, 2, 8, 7, 6, 3, 4],
      ],
      true,
    ],
    [
      [
        [9, 2, 6, 5, 8, 3, 4, 7, 1],
        [7, 1, 3, 4, 2, 6, 9, 8, 5],
        [8, 4, 5, 9, 7, 1, 3, 6, 2],
        [3, 6, 2, 8, 5, 7, 1, 4, 9],
        [4, 7, 1, 2, 6, 9, 5, 3, 8],
        [5, 9, 8, 3, 1, 4, 7, 2, 6],
        [6, 5, 7, 1, 3, 8, 2, 9, 4],
        [2, 8, 4, 7, 9, 5, 6, 1, 3],
        [1, 3, 9, 6, 4, 2, 8, 5, 7],
      ],
      true,
    ],
    [
      [
        [7, 1, 5, 6, 2, 3, 8, 4, 9],
        [6, 2, 4, 8, 1, 9, 3, 7, 5],
        [3, 9, 8, 7, 4, 5, 6, 2, 1],
        [5, 3, 9, 2, 7, 6, 4, 1, 8],
        [4, 6, 2, 1, 9, 8, 5, 3, 7],
        [8, 7, 1, 5, 3, 4, 9, 6, 2],
        [2, 5, 3, 9, 6, 7, 1, 8, 4],
        [1, 8, 6, 4, 5, 2, 7, 9, 3],
        [9, 4, 7, 3, 8, 1, 2, 5, 6],
      ],
      true,
    ],
    [
      [
        [7, 8, 3, 4, 5, 6, 1, 2, 9],
        [6, 9, 2, 1, 8, 7, 3, 4, 5],
        [1, 4, 5, 2, 3, 9, 6, 7, 8],
        [8, 1, 7, 3, 6, 2, 9, 5, 4],
        [5, 6, 4, 7, 9, 8, 2, 1, 3],
        [3, 2, 9, 5, 4, 1, 8, 6, 7],
        [4, 7, 6, 8, 2, 3, 5, 9, 1],
        [9, 3, 1, 6, 7, 5, 4, 8, 2],
        [2, 5, 8, 9, 1, 4, 7, 3, 6],
      ],
      true,
    ],
    [
      [
        [1, 7, 3, 2, 6, 8, 9, 5, 4],
        [4, 2, 5, 1, 9, 3, 7, 6, 8],
        [8, 6, 9, 7, 4, 5, 1, 2, 3],
        [6, 1, 2, 8, 3, 7, 4, 9, 5],
        [3, 9, 8, 4, 5, 6, 2, 1, 7],
        [5, 4, 7, 9, 1, 2, 3, 8, 6],
        [9, 5, 4, 3, 8, 1, 6, 7, 2],
        [2, 3, 6, 5, 7, 9, 8, 4, 1],
        [7, 8, 1, 6, 2, 4, 5, 3, 9],
      ],
      true,
    ],
    [
      [
        [8, 4, 7, 2, 6, 5, 1, 9, 3],
        [1, 3, 6, 7, 9, 8, 2, 4, 5],
        [9, 5, 2, 1, 4, 3, 8, 6, 7],
        [4, 2, 9, 6, 7, 1, 5, 3, 8],
        [6, 7, 8, 5, 3, 2, 9, 1, 4],
        [3, 1, 5, 4, 8, 9, 7, 2, 6],
        [5, 6, 4, 9, 1, 7, 3, 8, 2],
        [7, 8, 1, 3, 2, 4, 6, 5, 9],
        [2, 9, 3, 8, 5, 6, 4, 7, 1],
      ],
      true,
    ],
    [
      [
        [8, 4, 7, 2, 6, 5, 1, 0, 3],
        [1, 3, 6, 7, 0, 8, 2, 4, 5],
        [0, 5, 2, 1, 4, 3, 8, 6, 7],
        [4, 2, 0, 6, 7, 1, 5, 3, 8],
        [6, 7, 8, 5, 3, 2, 0, 1, 4],
        [3, 1, 5, 4, 8, 0, 7, 2, 6],
        [5, 6, 4, 0, 1, 7, 3, 8, 2],
        [7, 8, 1, 3, 2, 4, 6, 5, 0],
        [2, 0, 3, 8, 5, 6, 4, 7, 1],
      ],
      false,
    ], // a valid board, but with 0 instead of 9
    [
      [
        [1, 3, 2, 5, 7, 9, 4, 6, 8],
        [4, 9, 8, 2, 6, 1, 3, 7, 5],
        [7, 5, 6, 3, 8, 4, 2, 1, 9],
        [6, 4, 3, 1, 5, 8, 7, 9, 2],
        [5, 2, 1, 7, 9, 3, 8, 4, 6],
        [9, 8, 7, 4, 2, 6, 5, 3, 1],
        [2, 1, 4, 9, 3, 5, 6, 8, 7],
        [3, 6, 5, 8, 1, 7, 9, 2, 4],
        [8, 7, 9, 6, 4, 2, 1, 3, 5],
      ],
      false,
    ], // duplicated '3' in eighth column
    [
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [9, 1, 2, 3, 4, 5, 6, 7, 8],
      ],
      false,
    ], // valid rows and cols, but invalid boxes
    [
      [
        [0, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ],
      false,
    ],
    [
      [
        [1, 2, 3, 4, 5, 6, 6, 9, 9],
        [4, 5, 6, 6, 9, 9, 1, 2, 3],
        [6, 9, 9, 1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 6, 9, 9, 1],
        [5, 6, 6, 9, 9, 1, 2, 3, 4],
        [9, 9, 1, 2, 3, 4, 5, 6, 6],
        [3, 4, 5, 6, 6, 9, 9, 1, 2],
        [6, 6, 9, 9, 1, 2, 3, 4, 5],
        [9, 1, 2, 3, 4, 5, 6, 6, 9],
      ],
      false,
    ],
    [
      [
        [1, 2, 3, 1, 2, 3, 1, 2, 3],
        [4, 5, 6, 4, 5, 6, 4, 5, 6],
        [7, 8, 9, 7, 8, 9, 7, 8, 9],
        [2, 3, 1, 2, 3, 1, 2, 3, 1],
        [5, 6, 4, 5, 6, 4, 5, 6, 4],
        [8, 9, 7, 8, 9, 7, 8, 9, 7],
        [3, 1, 2, 3, 1, 2, 3, 1, 2],
        [6, 4, 5, 6, 4, 5, 6, 4, 5],
        [9, 7, 8, 9, 7, 8, 9, 7, 8],
      ],
      false,
    ],
    [
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
      ],
      false,
    ], // valid boxes and rows, repeats in cols
  ];

  it('Example tests', function () {
    function clone(board) {
      return board.map((row) => [...row]);
    }

    function stringify(board) {
      function strrow(row) {
        return `${row[0]}${row[1]}${row[2]}|${row[3]}${row[4]}${row[5]}|${row[6]}${row[7]}${row[8]}`;
      }

      const rows = board.map(strrow);
      rows.splice(6, 0, '---+---+---');
      rows.splice(3, 0, '---+---+---');
      return rows.join('\n');
    }

    for (const [board, expected] of fixedBoards) {
      const input = clone(board);
      const actual = validateSudoku(input);
      assert.strictEqual(
        actual,
        expected,
        `Incorrect answer for board:\n\n${stringify(board)}\n`,
      );
      assert.deepEqual(input, board, 'Input board must not be modified');
    }
  });
});

describe('it should rotate an array', () => {
  it('should rotate with only one row', () => {
    const a = [[1, 2, 3, 4]];

    assert.deepEqual(rotate(a), [[1], [2], [3], [4]]);
  });

  it('should rotate with two rows', () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    assert.deepEqual(rotate(a), [
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
