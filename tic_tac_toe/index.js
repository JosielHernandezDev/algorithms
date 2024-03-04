const moves = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];

function validateWinner(board, row, col, player) {
  let won = false;
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] !== player) {
      break;
    }
    if (i === board.length - 1) {
      won = true;
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][col] !== player) {
      break;
    }
    if (i === board.length - 1) {
      won = true;
    }
  }

  if (row === col) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] !== player) {
        break;
      }
      if (i === board.length - 1) {
        won = true;
      }
    }
  }

  if (row + col === board.length - 1) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][board.length - 1 - i] !== player) {
        break;
      }
      if (i === board.length - 1) {
        won = true;
      }
    }
  }
  return won;
}

function TicTacToeGame(moves) {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const playerA = "X";
  const playerB = "O";

  for (let i = 0; i < moves.length; i++) {
    let player = i % 2 === 0 ? playerA : playerB;
    // console.log('turns',i);
    // console.log('player',player);
    // console.log('board',board);
    let move = moves[i];
    let row = move[0];
    let col = move[1];
    board[row][col] = player;
    if (validateWinner(board, row, col, player)) {
      if (player === playerA) return "A";
      if (player === playerB) return "B";
    } else if (i === board.length * board.length - 1) {
      return "Draw";
    }
  }
}
module.exports = TicTacToeGame;
console.log(TicTacToeGame(moves));
