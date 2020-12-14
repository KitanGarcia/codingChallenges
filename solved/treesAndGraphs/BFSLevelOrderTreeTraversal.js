/*
 * BFS is the same as level order traversal
 *
 * Given a binary tree, return the level order traversal of its nodes' values (from left to right, level by level)
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *   3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 * return its level order traversal as:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 */

//General BFS
function levelOrder(root) {
  let result = [];
  let queue = [];
  
  if (!root) {
    return result;
  }
  queue.push(root);
  
  while (queue.length > 0) {
    let curr = queue[0];
    result.push(queue.shift().val);

    if (curr.left) {
      queue.push(curr.left);
    }

    if (curr.right) {
      queue.push(curr.right);
    }
  }
  console.log(result);
  return result;
}


//To solve this problem
function levelOrder2(root) {
  if (!root) {
    return [];
  }

  let result = [];
  let queue = [root];

  while(queue.length > 0) {
    let length = queue.length;
    let level = [];

    for(let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node.val);

      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}

