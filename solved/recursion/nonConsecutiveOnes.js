/*
 * Given a positive integer n, return an array of all the binary strings of length n that DO NOT contain consecutive 1s
 *
 *
 * Input: 2
 * Output: ["00", "01", "10"]
 *
 * Input: 3
 * Output: ["000", "001", "010", "100", "101"]
 *
 * Constraints:
 * Time Complexity: O(2^N)
 * Auxiliary Space Complexity: O(2^N)
 *
 *               0               1
 *          01      00       11      10
 *
 *
 *
 */

function nonConsecutiveOnes(n) {
  let result = [];
  function getString(string) {
    if (string.length === n) {
      result.push(string);
      return;
    }
    getString(string + "0");
    if (string[string.length - 1] !== "1") {
      getString(string + "1");
    }

  }
  getString("");
  return result;
}


console.log(nonConsecutiveOnes(3));
