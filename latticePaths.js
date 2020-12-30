/*
 *  Prompt:    Count the number of unique paths to travel from the top left
 *             to the bottom right of a lattice of squares.
 *
 *             NOTE: You are traveling along the **EDGES** of the lattice
 *
 *  Input:     An integer N (which is the width of the lattice)
 *             An integer M (which is the height of the lattice)
 *
 *  Output:    An interger (which represents the number of unique paths)
 *
 *  Example:   input: 2
 *
 *             (2 x 3 lattice of squares)
 *              __ __ __
 *             |__|__|__|
 *             |__|__|__|
 *
 *             output: 10 (number of unique paths from top left corner to bottom
 *                     right)
 *
 *             Diagram:
 *
 *             1__1__1__1
 *             |  |  |  |
 *             1__2__3__4
 *             |  |  |  |
 *             1__3__6__10
 *
 *  Notes:     What is the time and auxilliary space complexity of your solution?
 *
 *             When moving through the lattice, you can only move either down or
 *             to the right.
 *
 *             You did this problem before with recursion. Try implementing it
 *             now with dynamic programming!
 *
 *  Resources:
 *    1: https://projecteuler.net/problem=15
 *    2: https://en.wikipedia.org/wiki/Lattice_path
 *
 */

 // Time Complexity:
 // Auxiliary Space Complexity:
// down or right
/*
 *             x__x__1__1
 *             |  |  |  |
 *             1__1__1__1
 *             |  |  |  |
 *             1__1__1__1
 *
 *
 *             x__x__x__1
 *             |  |  |  |
 *             1__1__1__1
 *             |  |  |  |
 *             1__1__1__1
 *
 * 
 *             x__x__x__x
 *             |  |  |  |
 *             1__1__1__1
 *             |  |  |  |
 *             1__1__1__1
 *
 *
 *             x__x__x__x
 *             |  |  |  |
 *             1__1__1__x
 *             |  |  |  |
 *             1__1__1__1
 *
 *
 *             x__x__x__x
 *             |  |  |  |
 *             1__1__1__x
 *             |  |  |  |
 *             1__1__1__x
 */


//n is width; m is height
//working backwards from destination to source
function latticePaths(m, n) {
  //boundary is breached
  if (m < 0 || n < 0) {
    return 0;
  }

  //reached destination (or source how you view it)
  if (m == 0 && n == 0) {
    return 1;
  }

  let up = latticePaths(m - 1, n);
  let left = latticePaths(m, n - 1);

  //up and left are calculated each execution, so returning one simply acts as a count
  return up + left;
}
console.log(latticePaths(2, 3));


function latticePathsDP(m, n) {
  const dp = new Array(n + 2).fill(1);

  for (let row = m; row > 0; row--) {
    for (let col = n; col > 0; col--) {
      dp[col] = dp[col] + dp[col + 1];
      console.log(dp);
    }
  }
  return dp[1];
}
console.log(latticePathsDP(2, 3));
