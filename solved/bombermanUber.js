/*
 * Given a 2D grid, each cell is either a wall "W", an enemy "E", or empty "0", return the maximum enemies you can kill using one bomb
 * 
 * The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed
 *
 * You can only put the bomb at an empty cell
 *
 *
 */

let test = [["0", "E", "0", "0"],
            ["E", "0", "W", "E"],
            ["0", "E", "0", "0"]];
//output = 3

function maxKilledEnemies(grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let result = 0;
  let height = grid.length;
  let width = grid[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (grid[y][x] === "0") {
        result = Math.max(result, bombVisionHelper(x, y, grid));
      }
    }
  }

  return result;
}

function bombVisionHelper(xStart, yStart, matrix) {
  let count = 0;
  let height = matrix.length;
  let width = matrix[0].length;

  //right
  for (let x = xStart; x < width; x++) {
    if (matrix[yStart][x] === "W") {
      break;
    }
    if (matrix[yStart][x] === "E") {
      count++;
    }
  }
  
  //left
  for (let x = xStart; x > -1; x--) {
    if (matrix[yStart][x] === "W") {
      break;
    }
    if (matrix[yStart][x] === "E") {
      count++;
    }
  }
 
  //down
  for (let y = yStart; y < height; y++) {
    if (matrix[y][xStart] === "W") {
      break;
    }
    if (matrix[y][xStart] === "E") {
      count++;
    }
  }
  
  //up
  for (let y = yStart; y > -1; y--) {
    if (matrix[y][xStart] === "W") {
      break;
    }
    if (matrix[y][xStart] === "E") {
      count++;
    }
  }
  return count;
}

console.log(maxKilledEnemies(test));
