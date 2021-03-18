/*
1 1 1
1 1 0
1 0 1

1 1 1
1 1 0
1 0 1

0 0 0
0 0 0
0 0 0

0 1 1
1 1 0
1 0 1
*/

/*
 * Complete the 'largestArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY samples as parameter.
 */

function largestArea(samples) {
    // Write your code here
    //edge cases
    //check samples is 2d array
    //check for 1s and 0s
    
    let maxSquares = 0;
    
    //traverse matrix
    for (let i = 0; i < samples.length; i++) {
      for (let j = 0; j < samples[0].length; j++) {
        
        //we encounter a new 1
        if (samples[i][j] == 1) {
          let localMax = findSquare(i, j, samples); //search on current set of coordinates
          maxSquares = Math.max(localMax, maxSquares);
        }
      }
    }
    return maxSquares
}

//find squares and adjust max if necessary
function findSquare(row, col, samples) {
  let colList = [];
  let max = 0;
  // colList.push(samples[row][col]);
  //console.log(colList)
  
  //go down row from original 1
  for (let j = col; j < samples[0].length; j++) {
    if (samples[row][j] == 1) {
      colList.push(samples[row][j]);
      
      
      for (let i = row; i < colList.length; i++) {
        if (samples[i].slice(0, colList.length + 1) !== colList) {
          //we have no square
          return max;
        }
      }
      max++;
    }
  }
  return max;  
}

function main() {
