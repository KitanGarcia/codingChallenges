/*
Leetcode 50
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 */

const myPowV2 = function (x, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return x;
  } else if (n === -1) {
    return 1 / x;
  } else if (n % 2 === 0) {
    let t = myPow(x, n / 2);
    return t * t;
  } else if (n % 2 !== 0) {
    return x * myPow(x, n - 1);
  }
};

const myPowV3 = function (x, n) {
  let result = 1;
  for (let i = 0; i < Math.abs(n); i++) {
    if (n > 0) {
      result *= x;
    } else if (n < 0) {
      result /= x;
    }
  }
  return result;
};

const myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  const helper = (product, remaining) => {
    if (remaining === 0) {
      return product;
    }

    if (n > 0) {
      return helper(product * x, remaining - 1);
    } else if (n < 0) {
      return helper(product / x, remaining - 1);
    }
  };

  return helper(1, Math.abs(n));
};

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
console.log(myPow(2, 1));

console.log(myPowV2(2, 10));
console.log(myPowV2(2.1, 3));
console.log(myPowV2(2, -2));
console.log(myPowV2(2, 1));

console.log(myPowV3(2, 10));
console.log(myPowV3(2.1, 3));
console.log(myPowV3(2, -2));
console.log(myPowV3(2, 1));
