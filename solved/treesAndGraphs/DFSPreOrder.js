/*
 * Using recursion or iteration with a while loop, write a function that takes the root of a binary tree node and outputs an array of values ordered by depth first search
 */

function DFSPreOrder(root) {
  if (!root) {
    return [];
  }

  let result = [];
  function traverse(curr) {
    if (!curr) {
      return null;
    }

    result.push(curr.val);
    traverse(curr.left);
    traverse(curr.right);
  }

  traverse(root);
  return result;
}

//FASTER PURE RECURSION SOLUTION
function preorderTraversal(root, stack = [], result = []) {
  if (!root) {
    return [];
  }
  stack.push(root);
  result.push(root.val);
  
  if (root.left) {
    preorderTraversal(root.left, stack, result);
  }
  if (root.right) {
    preorderTraversal(root.right, stack, result)
  }
  return result;
}
