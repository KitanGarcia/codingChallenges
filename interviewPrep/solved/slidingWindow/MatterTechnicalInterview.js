/*
# Suppose you are given a list of integers, prices, that represent the price
# of Google's stock over time. prices[i] is the price of the stock on day i. 
# You must buy the stock once and then later sell it. 
# You are not allowed to sell before you buy.

# Write a function that returns an integer, which is the maximum profit you can make from buying the stock
# and then later selling it. If the list is empty, return 0.

# Example input:
# prices = [6,0,-1,10]
# prices = [6,0,-1,10, 4]
# prices = [6,5,4,3,2]



    6,   0,   -1,   10,   4
   L     R                                difference = r - l
    L          R                          difference = r - l
        L      R



# Example Output
# 11

# Explanation: 
# 11 is the maximum profit you can make by buying day 2 and selling day 3
*/

const findHighestProfit = (prices) => {
  if (prices.length === 0 || prices.length === 1) {
    return 0;
  }

  let maxProfit = 0;
  let left = 0;
  let right = 1;

  // sliding window
  while (left < prices.length) {
    let leftVal = prices[left];
    let rightVal = prices[right];
    let difference = rightVal - leftVal;

    if (difference > 0) {
      if (maxProfit < difference) {
        maxProfit = difference;
      }
    }

    if (right >= prices.length - 1) {
      left += 1;
      right = left + 1;
    } else {
      right++;
    }
  }
  return maxProfit;
};

let prices1 = [6, 0, -1, 10];
let prices2 = [6, 0, -1, 10, 4];
let prices3 = [6, 5, 4, 3, 2];

console.log(findHighestProfit(prices1)); // 11
console.log(findHighestProfit(prices2)); // 11
console.log(findHighestProfit(prices3)); // 0 since they don't need to trade
