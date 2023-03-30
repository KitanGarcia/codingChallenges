// Given a 2D array of 0s and 1s, a starting coordinate, and a destination coordinate,
// find whether the destination can be reached from the start.
// 1s are barriers while 0s are valid paths
const solution = (maze, startRow, startCol, destRow, destCol) => {
  // Type your solution here

  // Looks like we have to do DFS or BFS

  // Check if starting point is valid
  if (maze[startRow][startCol] !== 0) {
    return false;
  }

  // Check if starting point is ending point
  if (startRow === destRow && startCol === destCol) {
    return true;
  }

  // Set with "row_col" strings so we don't traverse the same coords
  let visited = new Set();

  // Returns list of valid neighbors with values of 0
  const findValidNeighbors = (row, col) => {
    let result = [];

    // Check up is valid
    if (maze[row - 1] && maze[row - 1][col] == 0) {
      result.push([row - 1, col]);
    }

    // Check down is valid
    if (maze[row + 1] && maze[row + 1][col] == 0) {
      result.push([row + 1, col]);
    }

    // Check left is valid
    if (maze[row] && maze[row][col - 1] == 0) {
      result.push([row, col - 1]);
    }

    // Check right is valid
    if (maze[row] && maze[row][col + 1] == 0) {
      result.push([row, col + 1]);
    }

    return result;
  };

  // Actually do BFS
  // Initialize queue and visited set
  let queue = [];
  queue.push([startRow, startCol]);
  visited.add(`${startRow}_${startCol}`);

  // Loop through queue and add neighbors to it
  while (queue.length > 0) {
    const current = queue.shift();
    const neighbors = findValidNeighbors(current[0], current[1]);
    console.log(neighbors);

    for (let tuple of neighbors) {
      // Check if destination
      if (tuple[0] === destRow && tuple[1] === destCol) {
        return true;
      }

      // Check if visited
      if (!visited.has(`${tuple[0]}_${tuple[1]}`)) {
        queue.push(tuple);
        visited.add(`${tuple[0]}_${tuple[1]}`);
      }
    }
  }

  return false;
};
