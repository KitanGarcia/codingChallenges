/*
Leetcode 2542
You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

For chosen indices i0, i1, ..., ik - 1, your score is defined as:

The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
Return the maximum possible score.

A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

 */

const fasterAnswer = function (nums1, nums2, k) {
  let result = 0;
  let totalSum = 0;
  let heap = new MinPriorityQueue({ priority: (element) => element });

  const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val]);
  merged.sort((a, b) => b[0] - a[0]);

  for (const [maxOf2, num1Val] of merged) {
    if (heap.size() === k) {
      totalSum -= heap.dequeue().element;
    }

    totalSum += num1Val;
    heap.enqueue(num1Val);

    if (heap.size() === k) {
      result = Math.max(result, totalSum * maxOf2);
    }
  }

  return result;
};

const maxSubsequenceScore = (nums1, nums2, k) => {
  const indices = [];
  let max = 0;

  const permuteIndices = (subSet, index, memo) => {
    if (subSet.size === k) {
      indices.push(Array.from(subSet));
      return;
    }

    if (memo[index]) {
      return memo[index];
    }

    for (let i = index; i < nums1.length; i++) {
      if (!subSet.has(i)) {
        // Select index
        subSet.add(i);
        permuteIndices(subSet, i + 1);
        subSet.delete(i);
      }
    }
  };
  permuteIndices(new Set(), 0);

  for (let combination of indices) {
    let sum = 0;
    let min = Infinity;
    for (let index of combination) {
      sum += nums1[index];
      if (min > nums2[index]) {
        min = nums2[index];
      }
    }
    let possibleResult = sum * min;

    if (max < possibleResult) {
      max = possibleResult;
    }
  }

  return max;
};

console.log(fasterAnswer([1, 3, 3, 2], [2, 1, 3, 4], 3)); // 12
console.log(fasterAnswer([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)); // 30
console.log(
  fasterAnswer(
    [
      93, 463, 179, 2488, 619, 2006, 1561, 137, 53, 1765, 2304, 1459, 1768, 450,
      1938, 2054, 466, 331, 670, 1830, 1550, 1534, 2164, 1280, 2277, 2312, 1509,
      867, 2223, 1482, 2379, 1032, 359, 1746, 966, 232, 67, 1203, 2474, 944,
      1740, 1775, 1799, 1156, 1982, 1416, 511, 1167, 1334, 2344,
    ],
    [
      345, 229, 976, 2086, 567, 726, 1640, 2451, 1829, 77, 1631, 306, 2032,
      2497, 551, 2005, 2009, 1855, 1685, 729, 2498, 2204, 588, 474, 693, 30,
      2051, 1126, 1293, 1378, 1693, 1995, 2188, 1284, 1414, 1618, 2005, 1005,
      1890, 30, 895, 155, 526, 682, 2454, 278, 999, 1417, 1682, 995,
    ],
    42
  )
);

/*
console.log(maxSubsequenceScore([1, 3, 3, 2], [2, 1, 3, 4], 3)); // 12
console.log(maxSubsequenceScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)); // 30
console.log(
  maxSubsequenceScore(
    [
      93, 463, 179, 2488, 619, 2006, 1561, 137, 53, 1765, 2304, 1459, 1768, 450,
      1938, 2054, 466, 331, 670, 1830, 1550, 1534, 2164, 1280, 2277, 2312, 1509,
      867, 2223, 1482, 2379, 1032, 359, 1746, 966, 232, 67, 1203, 2474, 944,
      1740, 1775, 1799, 1156, 1982, 1416, 511, 1167, 1334, 2344,
    ],
    [
      345, 229, 976, 2086, 567, 726, 1640, 2451, 1829, 77, 1631, 306, 2032,
      2497, 551, 2005, 2009, 1855, 1685, 729, 2498, 2204, 588, 474, 693, 30,
      2051, 1126, 1293, 1378, 1693, 1995, 2188, 1284, 1414, 1618, 2005, 1005,
      1890, 30, 895, 155, 526, 682, 2454, 278, 999, 1417, 1682, 995,
    ],
    42
  )
);
*/
