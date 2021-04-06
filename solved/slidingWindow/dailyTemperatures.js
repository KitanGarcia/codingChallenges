/*
    Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

    For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

    Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
 */

function dailyTemperatures(T) {
  let left = 0;
  let right = 0;
  let result = [];
  
  while (right < T.length) {
    right++;
    
    if (T[right] > T[left]) {
      result.push(right - left);
      left++;
      right = left;
    }
    
    else if (right === T.length) {
      result.push(0);
      left++;
      right = left;
    }
  }
  
  return result;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
