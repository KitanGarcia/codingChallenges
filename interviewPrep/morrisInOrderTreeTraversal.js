/*
 * Can use this on LeetCode 94
 * Morris Traversal is an In Order Traversal that does not employ the use of recursion or a stack
 *
 *
 *                                 6
 *                   3                            7
 *          1               4                                8
 *               2                 5
 *
 *
 * Morris Inorder Tree Traversal
 * 1, 2, 3, 4, 5, 6, 7, 8
 *
 *
 *
 *
 *
 * Logic:
 * 1. Initialize curr
 * 2. pre goes to left
 *   3. pre travels all the way to the right-most of the tree
 *     4. Create bridge: pre.right = curr
 *     4. if bridge exists, remove bridge, print curr, walk to the right
 * 2. if pre gets lost/no left node
 *   3. print the node and move curr to the right
 */


//Time Complexity: O(n)
//Space Complexity: O(1)
function morrisTraversal(root) {
  if (!root) {
    return null;
  }

  let result = [];

  let curr = root;
  let pre;
  while (curr) {
    if (curr.left) {
      pre = curr.left;
      while (pre.right !== null && pre.right !== curr) {
        pre = pre.right;
      }

      if (pre.right === null) {
        pre.right = curr;
        curr = curr.left;
      }

      else {
        pre.right = null;
        result.append(curr.val);
        curr = curr.right;
      }
    }
    else {
      result.append(curr.val);
      curr = curr.right;
    }
  }
}
