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

//This is in Python
//NOT A WORKING SOLUTION
//
class Solution:
  def PathSum(self, root: TreeNode, sum: int) -> int:
    def count_sum(node: TreeNode, running_sum): 
      nonlocal count
      if not node:
        return
      
      running_sum += node.val
      
      if running_sum - sum in hashmap:
        count += hashmap[running_sum - sum]

      #add running_sum to hash
      hash_map[running_sum] += 1

      #left and right recursion
      count_sum(node.left, running_sum)
      count_sum(node.right, running_sum)

      #backtrack
      hashmap[running_sum] -= 1
    
    
    count = 0
    hashmap = defaultdict(int)
    count_sum(root, 0)

    return count








//C++ ATTEMPT
class Solution {
    
    int count = 0;
    int target;
    unordered_map<int,int> prefix_sum;
    
    
    void preorder(TreeNode* node, int curr_sum)
    {
        if(node==nullptr) return;
        
        curr_sum += node->val;
        
        if(prefix_sum.count(curr_sum - target))
            count += prefix_sum[curr_sum - target];
        
        prefix_sum[curr_sum]++;
        
        preorder(node->left, curr_sum);
        preorder(node->right, curr_sum);
        
        prefix_sum[curr_sum]--;
    }
    
public:
    int pathSum(TreeNode* root, int sum) {
        prefix_sum[0] =1;
        target = sum;
        preorder(root, 0);
        return count;
    }
};
