const TicTacToeGame = require(".");

describe("tic_tac_toe", () => {
  it("should be player 'A' winner", () => {
    const moves = [
      [0, 0],
      [2, 0],
      [1, 1],
      [2, 1],
      [2, 2],
    ];
    expect(TicTacToeGame(moves)).toEqual("A");
  });

  it("should be player 'B' winner", () => {
    const moves = [
      [0, 0],
      [1, 1],
      [0, 1],
      [0, 2],
      [1, 0],
      [2, 0],
    ];
    expect(TicTacToeGame(moves)).toEqual("B");
  });

  it("should be no winner", () => {
    const moves = [
      [0, 0],
      [1, 1],
      [2, 0],
      [1, 0],
      [1, 2],
      [2, 1],
      [0, 1],
      [0, 2],
      [2, 2],
    ];
    expect(TicTacToeGame(moves)).toEqual("Draw");
  });
});
