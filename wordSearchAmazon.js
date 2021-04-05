/*
  Given an m x n grid of characters board and a string word, return true if word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally
  or vertically neighboring. The same letter cell may not be used more than once.

  Input: board = [["A","B","C","E"],
                  ["S","F","C","S"],
                  ["A","D","E","E"]],
                  word = "ABCCED"
  Output: true

  Input: board = [["A","B","C","E"],
                  ["S","F","C","S"],
                  ["A","D","E","E"]],
                  word = "SEE"
  Output: true

  Input: board = [["A","B","C","E"],
                  ["S","F","C","S"],
                  ["A","D","E","E"]],
                  word = "ABCB"
  Output: false
 */


function wordSearch(board, word) {
  if (board.length === 0) {
    return false;
  }

  if (word.length > board.length * board[0].length) {
    return false;
  }

  //iterate across whole board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && dfs(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

function dfs(board, word, row, col, index) {
  if (index >= word.length) {
    return true;
  }
  if (row < 0 || row === board.length || col < 0 ||
      col === board[0].length || board[row][col] !== word[index]) {
    return false;
  }
  console.log(index);
  console.log(board[row][col]);

  board[row][col] = "#";

  let rowOffsets = [0, 1, 0, -1];
  let colOffsets = [1, 0, -1, 0];

  for (let d = 0; d < 4; d++) {
    if (dfs(board, word, row + rowOffsets[d], col + colOffsets[d], index + 1)) {
      return true;
    }
  }
  board[row][col] = word[index];
  return false;
}




let board1 = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]];
let word1 = "ABCCED";

let board2 = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]];
let word2 = "SEE";

let board3 = [["A","B","C","E"],
              ["S","F","C","S"],
              ["A","D","E","E"]];
let word3 = "ABCB";

let board4 = [["C","A","A"],
              ["A","A","A"],
              ["B","C","D"]];
let word4 = "AAB";

let board5 = [["a","b"],
              ["c","d"]];
let word5 = "acdb";

console.log(wordSearch(board1, word1));
console.log(wordSearch(board2, word2));
console.log(wordSearch(board3, word3));
console.log(wordSearch(board4, word4));
console.log(wordSearch(board5, word5));
