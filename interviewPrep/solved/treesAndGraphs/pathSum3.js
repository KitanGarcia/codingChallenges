/*
Leetcode 437
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
 */

var pathSum = function (root, targetSum) {
  let count = 0;
  let visited = new Set();

  const traverse = (current, sum) => {
    if (!current) {
      return;
    }

    sum += current.val;

    if (sum === targetSum) {
      console.log(current.val);
      count++;
    }

    // Go left and take sum
    traverse(current.left, sum);

    // Go left and start over
    if (!visited.has(current.left)) {
      visited.add(current.left);
      traverse(current.left, 0);
    }

    // Go right and take sum
    traverse(current.right, sum);

    // Go right start over
    if (!visited.has(current.right)) {
      visited.add(current.right);
      traverse(current.right, 0);
    }
  };
  traverse(root, 0);

  return count;
};
