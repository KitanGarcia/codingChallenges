/*
 * Using recursion or iteration with a while loop, write a function that takes the root of a binary tree node and outputs an array of values ordered by depth first search
 */

function DFSPostOrder(root) {
  if (!root) {
    return [];
  }
  
  let result = [];
  function traverse(curr) {
    if (!curr) {
      return null;
    }
    traverse(curr.left);
    traverse(curr.right);
    result.push(curr.val);
  }
  traverse(root);
  return result;
}

//PURE RECURSION SOLUTION
function postOrderTraversal(root, result = []) {
  if (!root) {
    return [];
  }

  if (root.left) {
    postOrderTraversal(root.left, result)
  }
  if (root.right) {
    postOrderTraversal(root.right, result)
  }
  result.push(root.val);
  return result;
}
