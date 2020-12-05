/*
215 - Search a 2D matrix
Write an efficient algorithm that searches for a value in an M x N matrix. This matrix has the following properties:

Integers in each row are sorted from left to right
The first integer of each row is greater than the last integer of the previous row.
Input: Matrix of Integers, Target Integer
Output: Boolean

input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

target = 3

output: true

Constraints:
Time Complexity: O(log (N*M)) with M being the number of rows and N being the number of columns.   
Auxiliary Space Complexity: O(1)



  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]

  binary search.
  If target >= start and mid <= target, look in that array
  binary search to find target within sub array
 */


//nested binary searches yield O(log(n)) * O(log(m))
//this solution does not satisfy the time complexity
function search2DMatrix(matrix, target) {
  //time and space constraints tell us that binary search should be used. log(n) * log(m)
  let start = 0;
  let end = matrix.length - 1;
  let mid;

  //check that input is a matrix
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    return false;
  }

  //binary search outer matrix
  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    let dest = matrix[mid + 1] || matrix[matrix.length - 1]; //to avoid undefined error
    if(matrix[mid][0] === target) {
      return mid;
    }

    else if ((matrix[mid][0] < target && dest[0] > target) || (mid === matrix.length - 1 && matrix[mid][0] < target)) {
      //binary search nested matrixs
      let start2 = 0;
      let end2 = matrix[mid].length - 1;
      let mid2;
      while (start2 <= end2) {
        mid2 = Math.floor((start2 + end2) / 2);
        if (matrix[mid][mid2] === target) {
          return mid2;
        }
        else if (matrix[mid][mid2] < target) {
          start2 = mid2 + 1;
        }
        else if (matrix[mid][mid2] > target) {
          end2 = mid2 - 1;
        }
      }
      return false; //or break
    }


    else if(target < matrix[mid][0]) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return false;
}

console.log(search2DMatrix([[1, 3, 4, 5, 7], [10, 11, 12, 16, 20], [23, 24, 30, 34, 50]], 34));





/*
 * [[1, 3, 5, 7],
 *  [10, 11, 16, 20],
 *  [23, 30, 34, 50]]
 *
 *  Is visualized as
 *  [1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 50]
 *  11 is matrix[5] which is really matrix[1][2]
 *  To get these indices, the row is 5 / cols and column is 5 % cols
 */
//think of the 2D array as a 1D array
function search2DMatrix2(matrix, target) {
  //check that input is a matrix
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0]) || matrix.length === 0) {
    return false;
  }

  let rows = matrix.length;
  let cols = matrix[0].length;

  let start = 0;
  let end = rows * cols - 1; //not the length of the first sub array, but the total length if treated as 1D array


  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midElement = matrix[Math.floor(mid / cols)][mid % cols]; //mid / cols gives row; mid % cols gives column
    if (midElement === target) {
      return true;
    }
    else if (midElement < target) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(search2DMatrix2([[1, 3, 4, 5, 7], [10, 11, 12, 16, 20], [23, 24, 30, 34, 50]], 34));
