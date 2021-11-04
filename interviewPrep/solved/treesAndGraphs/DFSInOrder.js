/*
 * Using recursion or iteration with a while loop, write a function that takes the root of a binary tree node and outputs an array of values ordered by depth first search
 */

function DFSInOrder(root) {
  if (!root) {
    return [];
  }

  let result = [];
  function traverse(curr) {
    if (!curr) {
      return null;
    }

    traverse(curr.left);
    result.push(curr.val);
    traverse(curr.right);
  }
  traverse(root);
  return result;
}

//FASTER PURE RECURSION SOLUTION
function inOrderTraversal(root, result = []) {
  if (!root) {
    return [];
  }

  if (root.left) {
    inorderTraversal(root.left, result);
  }
  result.push(root.val);
  if (root.right) {
    inorderTraversal(root.right, result);
  }
  return result;
}
