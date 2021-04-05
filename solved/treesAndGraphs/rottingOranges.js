 /*
  You are given an m x n grid where each cell can have one of three values:

  0 representing an empty cell,
  1 representing a fresh orange, or
  2 representing a rotten orange.
  Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

  Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

 */

/*
     2   1   1
     1   1   0
     0   1   1
*/
var orangesRotting = function(grid) {
  const numRows = grid.length, numCols = grid[0].length;
  let queue = [];
  let minute = 0;
  let fresh = 0;

  //for finding adjacent neighbors
  const rowChange = [1, -1, 0, 0];
  const colChange = [0, 0, 1, -1]; 


  for(let i = 0; i < numRows; i++) {
    for(let j = 0; j < numCols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      }
      else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  while (fresh && queue.length) {
    const next = [];
    minute++;

    //for each coordinate pair in the queue (2)
    for(let [row, col] of queue) {
      //for each adjacent cell
      for(let i = 0; i < rowChange.length; i++) {
        const newRow = row + rowChange[i];
        const newCol = col + colChange[i];

        //new row and col coordinates are in bounds and have value of 1
        if(newRow < numRows && newRow >= 0 && newCol < numCols && newCol >= 0 && grid[newRow][newCol] === 1) {
          //decrease number of fresh, change to 2, and add to queue
          fresh--;
          grid[newRow][newCol] = 2;
          next.push([newRow, newCol]);
        }
      }
    }
    queue = next;
  }
  return !fresh ? minute : -1;
};

let input1  = [[2, 1, 1],
               [1, 1, 0],
               [0, 1, 1]];

let input2  = [[2, 1, 1],
               [0, 1, 1],
               [1, 0, 1]];

let input3  = [[0, 2]];

console.log(orangesRotting(input1));
console.log(orangesRotting(input2));
console.log(orangesRotting(input3));
