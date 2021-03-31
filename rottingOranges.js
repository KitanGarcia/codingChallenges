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
  let twosPresent = false;
  let onesPresent = false;
  let maxMinutes = 0;
  let visited = new Set();
  
  //find 2
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      visited.add(i + "_" + j);
      if (grid[i][j] == 2) {
        //start bfs
        twosPresent = true;
        let minutes = bfs(i, j, grid, visited);
        maxMinutes = Math.max(maxMinutes, minutes);
      }
      else if (grid[i][j] == 1) {
        onesPresent = true;
      }
    }
  }
  
  //this needs to be fixed
  if (onesPresent === false || twosPresent === false) {
    return 0;
  }
  return maxMinutes;
};



function bfs(i, j, grid, visited) {
  let minutes = 0;

  
  let queue = [];
  queue.push([i, j]);
  
  while (queue.length > 0) {
    let current = queue.shift();
    minutes++;
    
    
    let neighbors = getNeighbors(i, j, grid, visited);
    for (let neighbor of neighbors) {
      //console.log("VISITED");
      // console.log(visited);
      console.log(neighbor[0] + "_" + neighbor[1]);
      if (!visited.has(neighbor[0] + "_" + neighbor[1])) {
        // console.log(neighbor);
        queue.push(neighbor);
        visited.add(neighbor[0] + "_" + neighbor[1]); 
      }
    }
  }
  console.log(minutes)
  
  return minutes;
}


function getNeighbors(i, j, grid, visited) {
  //should I check for visited?
  //check 4 directions
  let result = [];
  
  //down
  if (i + 1 < grid.length && !visited.has(i + 1 + "_" + j)) {
    result.push([i + 1, j])
  }
  
  //up
  if (i - 1 >= 0 && i - 1 + "_" + j) {
    result.push([i - 1, j])
  }
  //right
  if (j + 1 < grid[0].length && !visited.has(i + "_" + j + 1)) {
    result.push([i, j + 1])
  }
  
  //left
  if (j - 1 >= 0 && !visited.has(i + 1 + "_" + j)) {
    result.push([i, j - 1])
  }
  return result;
}

let input  = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(input));
