/*
 * Complete the 'spiral_out' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER numRows
 *  2. INTEGER numCols
 *  3. INTEGER row
 *  4. INTEGER col
 */

/*
find starting row,col
count = 1
start spiraling
    traverse up * count
    traverse right, down, * count

Once square broken
inc count
apply to next direction/square


//edge case - what if we go out of bounds!?



looks we count every 2 directional chagnes
matrix[row][col]
count = 1
directions[[-1, 0], [0, 1], [1, 0], [0, -1]] // defines how we move

// increment count everytime we change direction twice


//while (row < numRows || col <  
*/
function spiral_out(numRows, numCols, row, col) {
  let cols = new Array(numCols).fill(-1);
  let matrix = new Array(numRows).fill(cols);
  if (row >= numRows || col >= numCols) {
    return matrix;
  }

  console.log(matrix);

  let multiplier = 0;
  let count = 1;
  let deltas = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // defines how we move

  // while position is valid
  while (row < numRows || col < numCols) {
    // start row, col
    matrix[row][col] = count;
    count++;

    for (let i = 0; i < deltas.length; i++) {
      if (i % 2 === 0) {
        multiplier++;
      }
      // original = row,col
      row += deltas[i][0] * multiplier;
      col += deltas[i][1] * multiplier;

      // destination row,col

      /*
            loop through from original to destination
                matrix[i][j] = count;
                count++
                
                check to see if we're about to fall out of bounds
            */
    }

    // take exactly 1 step in the current direction (need some more variables)
    // take <multipler> steps in the current direction (check out of bounds)
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numRows = parseInt(readLine().trim(), 10);

  const numCols = parseInt(readLine().trim(), 10);

  const row = parseInt(readLine().trim(), 10);

  const col = parseInt(readLine().trim(), 10);

  const result = spiral_out(numRows, numCols, row, col);

  ws.write(result.map((x) => x.join(" ")).join("\n") + "\n");

  ws.end();
}
