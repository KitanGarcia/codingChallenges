/*
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


function biggestSquare(input) {
  let maxSquare = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] == 1) {
        let localMax = findSquare(i, j, input);
        console.log(localMax);
        maxSquare = Math.max(localMax, maxSquare);
      }
    }
  }
  return maxSquare;
}

function findSquare(row, col, input) {
  console.log("origin: " + row + ", " + col);
  let max = 1;
  let cols = [];

  for (let j = col; j < input[0].length; j++) {
    if (input[row][j] == 1) {
      cols.push(1);
      console.log(cols);

      if (j + row < input.length) {
        for (let i = row + 1; i < j + row; i++) {
          if (input[i][j] == 0) {
            return max;
          }
        }
      }
    }
    else {
      break;
    }
    max = j;
  }
  return max;
}

let input1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
let input2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let input3 = [[0, 1, 1], [1, 1, 0], [1, 0, 1]];
let input4 = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
let input5 = [[0, 0, 1], [0, 0, 0], [0, 0, 0]];
let input6 = [[0, 1, 1], [0, 0, 0], [0, 0, 0]];
/*
    0 1 1
    1 1 0
    1 0 1

    1 1 1
    1 1 1
    1 1 1
*/

/*
console.log(biggestSquare(input1));
console.log(biggestSquare(input2));
*/
console.log(biggestSquare(input3));
console.log("===============NEXT INPUT===============");
console.log(biggestSquare(input4));
/*
console.log(biggestSquare(input5));
console.log(biggestSquare(input6));
*/


/*
 * Complete the 'largestArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY samples as parameter.
 */

/*
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
*/
