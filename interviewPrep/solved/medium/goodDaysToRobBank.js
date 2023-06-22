/*
 * Leetcode 2100
You and a gang of thieves are planning on robbing a bank. You are given a 0-indexed integer array security, where security[i] is the number of guards on duty on the ith day. The days are numbered starting from 0. You are also given an integer time.

The ith day is a good day to rob the bank if:

There are at least time days before and after the ith day,
The number of guards at the bank for the time days before i are non-increasing, and
The number of guards at the bank for the time days after i are non-decreasing.
More formally, this means day i is a good day to rob the bank if and only if security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time].

Return a list of all days (0-indexed) that are good days to rob the bank. The order that the days are returned in does not matter.
 */

/*
 * loop through security
 * for each day (i)
 *   Check if i - time and i + time are in bounds of security
 *   Get start index (i - time)
 *   Get end index (i + time)
 *
 *   loop from first to i
 *     find if security nonincreasing
 *
 *   loop from i to end
 *     find if security nondecreasing
 *
 *   if both true, then add to result
 */

const goodDaysToRobBank = (security, time) => {
  let days = [];

  for (let i = 0; i < security.length; i++) {
    // Get windows to search
    let startIndex = i - time;
    let endIndex = i + time;

    // Check if start and end indices are in bounds
    if (
      (security[startIndex] || security[startIndex] === 0) &&
      (security[endIndex] || security[endIndex] === 0)
    ) {
      if (
        isMonotonic(security, startIndex, i, true) &&
        isMonotonic(security, i, endIndex, false)
      ) {
        days.push(i);
      }
    }
  }

  return days;
};

const isMonotonic = (security, start, end, isNonIncreasing) => {
  let comparator = security[start];
  if (isNonIncreasing) {
    for (let i = start; i <= end; i++) {
      if (security[i] <= comparator) {
        comparator = security[i];
      } else {
        return false;
      }
    }
    return true;
  } else {
    for (let i = start; i <= end; i++) {
      if (security[i] >= comparator) {
        comparator = security[i];
      } else {
        return false;
      }
    }
    return true;
  }
};

console.log(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2)); // [2, 3]
console.log(goodDaysToRobBank([1, 1, 1, 1, 1], 0)); // [0, 1, 2, 3, 4]
console.log(goodDaysToRobBank([1, 2, 3, 4, 5, 6], 2)); // []
console.log(goodDaysToRobBank([0, 0, 0, 0, 0], 0)); // [0, 1, 2, 3, 4]
