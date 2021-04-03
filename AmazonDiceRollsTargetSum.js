/*
 *
 * You have d dice, and each die has f faces numbered 1, 2, ..., f.
 *
 * Return the number of possible ways (out of fd total ways) modulo 10^9 + 7 to roll the dice so the sum of
 * the face up numbers equals target.
 *
 *
 * Input: d = 2, f = 6, target = 7
 * Output: 6
 * Explanation: You throw 2 dice, each with 6 faces. There are 6 ways to get a sum of 7
 *
 * Input: d = 2, f = 5, target = 10
 *
 * Output: 1
 * Explanation: You throw two dice, each with 5 faces. There is only one way to get a sum of 10: 5 + 5
 *
 *
 * Input: d = 1, f = 2, target = 3
 * Output: 0
 * Explanation: You throw one die with 2 faces. There is no way to get a sum of 3
 *
 *
 * Input: d = 30, f = 30, target = 500
 * Output: 222616187
 * Explanation: The answer must be returned modulo 10^9 + 7
 */



/*
 *                                               7, 2
 *                -1               -2           -3          -4           -5            -6
 *                6,1              5, 1         4,1         3,1          2,1           1,1
 *
 *  Subtract similarly on each node. Destination is 0,0. Other base cases are negative
 */


//Time Complexity: O(f^(t + d)) without memoization
//with Memoization: O(d *f * t)
//Space Complexity: O(d * t)
//Since target and dice dictate height and faces dicates branches
function numRollsToTarget(d, f, target) {
  let cache = {};

  function findWays(current, dice) {
    let key = current + "_" + dice;
    if (current === 0 && dice === 0) {
      return 1;
    }
    if (current < 0) {
      return 0;
    }
    if (current > 0 && dice === 0) {
      return 0;
    }
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    let sum = 0;

    for (let i = 1; i <= f; i++) {
      sum = (sum + findWays(current - i, dice - 1)) % (1000000000 + 7);
    }
    cache[key] = sum;
    return sum;
  }
  let result = findWays(target, d);
  return result;
}

console.log(numRollsToTarget(2, 5, 7));
console.log(numRollsToTarget(2, 5, 10));
console.log(numRollsToTarget(1, 2, 3));
console.log(numRollsToTarget(30, 30, 500));
