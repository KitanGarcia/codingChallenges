/*
Leetcode 714
You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
 */

/*
 * Keep running max
 
     1,     3,     2,     8,     4,     9
     L      R                                diffWithFee = 3 - 1 - 2 = 0; set as max
     L             R                         diffWithFee = 2 - 1 - 2;
     L                    R                  diffWithFee = 8 - 1 - 2 = 5; set as max
     L                           R           diffWithFee = 4 - 1 - 2
     L                                  R    diffWithFee = 9 - 1 - 2 = 6;
            L      R                         Reset R and L

    We want to do this, BUT every time we have a diffWithFee > 0, we want to either take the trade or proceed without taking the trade

    Scratch that... If all trades are losing, then we can't do diffWithFree > 0

    Take the trade: total += diffWithFee; move L and R to next

    Move on: move R to next

 */

const maxProfit = (prices, fee) => {
  if (prices.length === 0 || prices.length === 1) {
    return 0;
  }

  let max = -Infinity;
  let totals = [];
  let left = 0;
  let right = 1;
  let diffWithFee = 0;

  while (left < prices.length) {
    diffWithFee = prices[right] - prices[left] - fee;
    totals.push(diffWithFee);

    if (max < diffWithFee) {
      max = diffWithFee;
    }

    if (right >= prices.length - 1) {
      left += 1;
      right = left + 1;
    } else {
      right++;
    }
  }

  return max;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6
