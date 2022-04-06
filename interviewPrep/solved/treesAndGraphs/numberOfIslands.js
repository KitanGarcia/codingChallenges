/*
 * Leetcode 200
 *Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

var numIslands = function (grid) {
  let visited = new Set();
  let count = 0;

  const getNeighbors = (i, j) => {
    const neighbors = [];

    // Go up
    if (i > 0) {
      if (grid[i - 1][j] == 1) {
        neighbors.push([i - 1, j]);
      }
    }

    // Go down
    if (i < grid.length - 1) {
      if (grid[i + 1][j] == 1) {
        neighbors.push([i + 1, j]);
      }
    }

    // Go left
    if (j > 0) {
      if (grid[i][j - 1] == 1) {
        neighbors.push([i, j - 1]);
      }
    }

    // Go right
    if (j < grid[0].length - 1) {
      if (grid[i][j + 1] == 1) {
        neighbors.push([i, j + 1]);
      }
    }
    return neighbors;
  };

  const bfs = (i, j) => {
    const initialEntry = i + "_" + j;
    let stack = [];
    stack.push([i, j]);
    visited.add(initialEntry);

    while (stack.length > 0) {
      let current = stack.pop();
      let neighbors = getNeighbors(current[0], current[1]);

      for (let neighbor of neighbors) {
        let neighborEntry = neighbor[0] + "_" + neighbor[1];
        if (!visited.has(neighborEntry)) {
          stack.push(neighbor);
          visited.add(neighborEntry);
        }
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1 && !visited.has(i + "_" + j)) {
        count++;
        bfs(i, j);
      }
    }
  }
  return count;
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const grid3 = [
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"],
];

console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));
