/*
 * Given an integer array nums, find the sum of the elements between indices i and j (i <= j) inclusive
 *
 * Implement the NumArray class:
 *   NumArray(int[] nums) initializes the object with the integer array nums
 *   int sumRange(int i, int j) returns the sum of the elemnts of the nums array in hte range[i, j]
 *   inclusive (ie. sum(nums[i], num[i + 1], ..., nums[j])
 *
 *   Example:
 *   Input: ["NumArray", "sumRange", "sumRange", "sumRange"]
 *          [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0,5]]
 *
 *  Output: [null, 1, -1, -3]
 *
 */


var NumArray = function(nums) {
  this.arr = nums;
};

NumArray.prototype.sumRange = function(i, j) {
  let count = 0;
  while (i <= j) {
    count+= this.arr[i];
    i++;
  }
  return count;
};

/*
 * Given a file and assume that you can only read the file using a given method, read4, implement a method to read n characters
 *
 * The API read4 reads 4 consecutive characters from file, then writes those characters into the bugger array buf4
 *
 * The return value is the number of actual characters read
 *
 * Note that read4() has its own file pointer, much like FILE *fp in C
 *
 * Definition of read4:
 * Parameter: char[] buf4
 * Returns: int
 *
 * buf4[] is a destination, not a source. The results from read4 will be copied to buf4.
 *
 * Example 1:
 * Input: file = "abc", n = 4
 * Output: 3
 *
 * Example 2:
 * Input: file = "abcde", n = 5
 * Output: 5
 *
 * Example 3:
 * Input: file = "abcdABCD1234", n = 12
 * Output: 12
 *
 * Example 4:
 * Input: file = "leetcode", n = 5
 * Output: 5
 */

var solution = function(read4) {
  return function(buf, n) {
    let currentRead = 0;
    let count = 0;
    let fakeBuffer = new Array(n);
    let index = 0;

    while (true) {
      currentRead = read4(buf);
      count += currentRead;

      if (currentRead === 0) {
        break;
      }

        let stopIndex = i + currentRead;
        let j = 0;
        while (i < stopIndex) {
          buf[i] = fakeBuffer[j];
          i++;
          j++;
        }
      }


      if (currentRead >= n || i >= n) {
        break;
      }
    }
    return count;
  }
}
