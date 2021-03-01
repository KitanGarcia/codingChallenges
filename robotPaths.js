/*
 * Given a matrix of 0s, determine how many unique paths exist form the top left corner to the bottom right corner
 *
 * input: an array of an array of integers (matrix)
 * output: integer
 *
 *Example 1:
 Input:  
 [[ 0, 0, 0, 0],
  [ 0, 0, 0, 0],
  [ 0, 0, 0, 0]]

 Output: 38


Example 2:

 Input:  
 [[ 0, 0, 0],
  [ 0, 0, 0]]

 Output: 4


Example 3:
 Input:  
 [[ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0]]

 Output: 7110272



 From any point, you can travel in the four cardinal directions (north, south, east, west)
 A path is valid as long as it travels from the top left corner to the bottom right corner,
 does not go off of the matrix, and does not travel back on itself. Think of this as a graph
 traversal problem where you note the nodes you've visited in some way
 */

/*
 *                                                       2,1
 *                         1,1                                                            2,0
 *            0,1                        1,0                              1,0                           
 *                   0,0          0,0                            0,0
 */

function robotPaths(cols, rows) {
  function traverse(x, y, visited) {
    if (x === 0 && y === 0) {
      return 1;
    }
    if (x < 0 || y < 0 || x > cols || y > rows || visited.has(x + "_" + y)) {
      return 0;
    }

    //add coordinate to visited set to prevent going backwards
    visited.add(x + "_" + y);

    let left = traverse(x - 1, y, visited);
    let right = traverse(x + 1, y, visited);
    let up = traverse(x, y - 1, visited);
    let down = traverse(x, y + 1, visited);

    //remove coordinate from visited so we can traverse it in another path
    visited.delete(x + "_" + y);

    return left + right + up + down;

  }
  return traverse(cols, rows, new Set());
}



function robotPaths2(cols, rows) {
  function makeBoard(cols, rows) {
    let board = [];
    for (let i = 0; i <= rows; i++) {
      board.push([]);
      for (let j = 0; j <= cols; j++) {
        board[i].push(false);
      }
    }
    return board;
  }

  let board = makeBoard(cols, rows);

  function traverse(board, x, y) {
    /*
    console.log(board);
    console.log(x);
    console.log(y);
    console.log("=======================================");
    */
    //if out of bounds or cell has been visited
    if (x === board[0].length || y === board.length || x < 0 || y < 0 || board[y][x]) {
      return 0;
    }

    if (x === board[0].length - 1 && y === board.length - 1) {
      return 1;
    }

    board[y][x] = true;

    let left = traverse(board, x - 1, y);
    let right = traverse(board, x + 1, y);
    let up = traverse(board, x, y - 1);
    let down = traverse(board, x, y + 1);

    board[y][x] = false;

    return left + right + up + down;
  }
  return traverse(board, 0, 0);
}

console.log(robotPaths(2, 1));
//console.log(robotPaths2(2, 3));
