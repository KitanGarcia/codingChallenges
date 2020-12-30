/*
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */

//RECURSIVE SOLUTION
function fibRecurse(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibRecurse(n - 1) + fibRecurse(n - 2);
}

//DYNAMIC PROGRAMMING SOLUTION
function fibDP(n) {
  let f = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f[n];
}

console.log(fibRecurse(9));
console.log(fibDP(9));
