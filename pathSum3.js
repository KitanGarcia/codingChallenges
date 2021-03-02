/*
https://leetcode.com/problems/path-sum-iii/
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.


Example:
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
*/

/*
                                                  10
                                                 /  \
                                                5   -3
                                               / \    \
                                              3   2   11
                                             / \   \
                                            3  -2   1
 *                                               
 *  Traverses some parts multiple times since it's a dfs within a dfs
 *  Time Complexity is between O(nlog(n)) to O(n^2)
 */
function pathSum(root, target) {
  let count = 0;
  
  //first dfs to call 2nd dfs
  function dfs(node, target) {
    if (!node) {
      return;
    }
    
    test(node, target); //call 2nd dfs
    dfs(node.left, target);
    dfs(node.right, target);
  }
  
  //this 2nd dfs will just compare sum with target
  function test(node, target) {
    if (!node) {
      return;
    }
    
    if (node.val === target) {
      count++;
    }
    
    test(node.left, target - node.val);
    test(node.right, target - node.val);
  }
  dfs(root, target);
  return count;
}



//MORE OPTIMIZED SOLUTION
var pathSum2 = function(root, target) {
    const freq = { 0: 1 }
    function dfs (node, currSum) {
        if (!node) {
          return 0;
        }
      
        currSum += node.val;
        const oldSum = currSum - target;
        let res = freq[oldSum] || 0;
      
        freq[currSum] = (freq[currSum] || 0) + 1;
        res += dfs(node.left, currSum) + dfs(node.right, currSum);
        freq[currSum]--;
        return res;
    }
    return dfs(root, 0)
};

//ANOTHER SOLUTION
var pathSum3 = function(root, target) {
  let count = 0;
  
  function dfs(node, tempSum) {
    if (!node) {
      return;
    }
    
    tempSum += node.val;
    if (tempSum === target) {
      count++;
    }
    
    dfs(node.left, tempSum);
    dfs(node.right, tempSum);
  }
  
  
  let curr = root;
  let stack = [];
  
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      dfs(curr, 0);
      curr = curr.left;
    }
    curr = stack.pop();
    curr = curr.right;
  }
  return count;
};
