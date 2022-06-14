// Leetcode 366
const findLeaves = function(root) {
  let numLeaves;
  let removeIndex;
  let result = [];

  while (root.length > 0) {
    numLeaves = Math.floor((root.length + 1) / 2);
    removeIndex = root[root.length - numLeaves - 1];

    result.push(root.splice(removeIndex, root.length));
    root = root.splice(0, removeIndex);
  }

  return result;
};

console.log(findLeaves([1,2,3,4,5]));
console.log(findLeaves([1,2,3,4,5,6,7]));
console.log(findLeaves([1,2,3,4,5,6,7,8,9]));

/*
 *                             1
 *              2                            3
 *    4                  5
 *
 *    Output: [[4, 5, 3], [2], [1]]
 *    What makes a leaf?
 *    Length = 5: 3 leaves.
 *    Length = 4: 2 leaves
 *    Length = 3: 2 leaves
 *    Length = 2: 1 leaf
 *    Length = 1: 1 leaf
 *
 *
 *
 *                                         1
 *                          2                            3
 *                4                  5           6              7
 *          8          9
 *
 *    Output: [[5, 6, 7, 8, 9], [4, 3], [2], [1]]
 *    What makes a leaf?
 *    Length = 9: 5 leaves.
 *    Length = 8: 4 leaves.
 *    Length = 7: 4 leaves.
 *    Length = 6: 3 leaves.
 *    Length = 5: 3 leaves.
 *    Length = 4: 2 leaves
 *    Length = 3: 2 leaves
 *    Length = 2: 1 leaf
 *    Length = 1: 1 leaf
 *
 *    leaves * 2 - 1 = length
 *    leaves = floor((length + 1 ) / 2)
 */
