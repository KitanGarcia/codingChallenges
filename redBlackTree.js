/*
 * Red Black Trees: Self-balancing BST. Insert, search, and remove are all O(log(n)
 *
 * 1. Every node has a color, either red or black
 * 2. Tree root is always black
 * 3. No two adjacent red nodes (red node cannot have red parent or child)
 * 4. Every path from any node (including root) to all of its descendant null possitions contains the same number of black nodes
 * 5. Null spots are considered black
 *
 *
 * Rules:
 * If inserted node is root, change color to black
 * If inserted node has a parent that is black, do nothing
 * If parent is red: If uncle is red, change uncle and parent to black. Also change grandparent to red, then repeat process for non-red gradparent, toggle root eventually to color black
 *
 *
 *
 *                             5b
 *              (parent) 2r         8r (uncle)
 *          (inserted) 1r
 *
 *                         becomes
 *
 *                             5b
 *              (parent) 2b         8b (uncle)
 *          (inserted) 1r
 *
 *
 *
 *
 * Need to consider left-left, left-right, right-left, and right-right relationships between newly inserted node and grandparent
 * Right-Right
 * gp = grandparent, u = uncle, p = parent, w = wildcard, x = inserted
 *                 5b (gp)
 *         (u) 2b     8r (p)
 *                  w    9 (x)
 *
 * 1. Create wildcard reference: w = P.left
 * 2. Set parent.left => grandparent
 * 3. Set gp.right => wildcard
 * 4. Parent color => black
 * 5. GP color => red
 * 6. If uncle exists, toggle inserted to black
 *
 *                 becomes
 *                 8b (p)
 *        (gp) 5r      9r (x)
 *       (u) 2b   w
 *
 *
 *
 * Right-Left
 * gp = grandparent, u = uncle, p = parent, w = wildcard, x = inserted
 *                 5b (gp)
 *         (u) 2b     8r (p)
 *                  7r (x)
 *
 * 1. No wildcard
 * 2. Set gp.right => inserted node
 * 3. Set inserted.right => parent node
 * 4. Set parent.left => null
 * 5. Set inserted.left => gp
 * 6. Set gp.right => null
 * 7. Set inserted color => black
 * 8. GP color => red
 * 9. If uncle exists, toggle parent to black
 *
 *                 becomes
 *                 7b (x)
 *        (gp) 5r     8p (p)
 *      (u) 2b
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.color = "red";
  }
}


class RedBlackTree {
  constructor() {
    this.root = null;
  }

  //returns void
  insert(val) {
    let stack = []; //this will contain the nodes in the path of the root to the inserted node inclusive
    let x = new Node(val);
    if (this.root === null) {
      this.root = x;
      this.root.color = "black";
      return;
    }

    let current = this.root;
    while (current) {
      stack.push(current);
      //insert to left
      if (val < current.val) {
        if (current.left === null) {
          break;
        }
        current = current.left;
      }
      //insert to right
      else {
        if (current.right === null) {
          break;
        }
        current = current.right;
      }
    }

    if (val < current.val) {
      current.left = x;
    }
    else {
      current.right = x;
    }
    


    let grandparent;
    let parent;
    let uncle;
    while (stack.length > 0) {
      parent = stack.pop();
      if (parent.color === "black") {
        return;
      }

      //if parent is red
      grandparent = stack.pop();
      uncle = this.getUncle(parent, grandparent);

      if (uncle !== null && uncle.color === "red") {
        uncle.color = "black";
        parent.color = "black";
        grandparent.color = "red";

        //repeat the process as if the new node is the grandparent
        x = grandparent;
      }

      //null uncles are black or null
      //now we need to go through the l-l, l-r, r-l, r-r scenarios
      else {
        let connection;
        let direction;
        if (stack.length !== 0) {
          let connection = stack.pop();
          if (connection.right === grandparent) {
            direction = "right";
          }
          else {
            direction = "left";
          }
        }
        this.rotation(x, parent, grandparent, uncle, connection, direction);
        return;
      }
    }

    //stack length has reached 0. The node remaining is the root node and must be toggled to black
    this.root.color = "black";
  }


  getUncle(parent, grandparent) {
    if (grandparent.left === parent) {
      return grandparent.right;
    }
    else {
      return grandparent.left;
    }
  }

  rotation(x, parent, grandparent, uncle, connection, direction) {
    if (grandparent.left === parent) {
      if (parent.left === x) {
        //Left-left
        this.leftLeft(x, parent, grandparent, uncle, connection, direction);
      }
      else {
        //Left-right
        this.leftRight(x, parent, grandparent, uncle, connection, direction);
      }
    }
    else {
      if (parent.right ===  x) {
        //Right-right
        this.rightRight(x, parent, grandparent, uncle, connection, direction);
      }
      else {
        //Right-left
        this.rightLeft(x, parent, grandparent, uncle, connection, direction);
      }
    }
  }


  leftLeft(x, parent, grandparent, uncle, connection, direction) {
    let wildcard = parent.right;
    parent.right = grandparent;
    grandparent.left = wildcard;
    parent.color = "black";
    grandparent.color = "red";
    if (uncle) {
      x.color = "black";
    }

    if (connection) {
      connection[direction] = parent;
    }
    else {
      this.root = parent;
    }
  }

  leftRight(x, parent, grandparent, uncle, connection, direction) {
    grandparent.left = x;
    x.left = parent;
    parent.right = null;
    x.right = grandparent;
    grandparent.left = null;
    x.color = "black";
    grandparent.color = "red";

    if (uncle) {
      parent.color = "black";
    }

    if (connection) {
      connection[direction] = x;
    }
    else {
      this.root = x;
    }
  }

  rightRight(x, parent, grandparent, uncle, connection, direction) {
    let wildcard = parent.left;
    parent.left = grandparent;
    grandparent.right = wildcard;
    parent.color = "black";
    grandparent.color = "red";
    if (uncle) {
      x.color = "black";
    }

    if (connection) {
      connection[direction] = parent;
    }
    else {
      this.root = parent;
    }
  }

  rightLeft(x, parent, grandparent, uncle, connection, direction) {
    grandparent.right = x;
    x.right = parent;
    parent.left = null;
    x.left = grandparent;
    grandparent.right = null;
    x.color = "black";
    grandparent.color = "red";

    if (uncle) {
      parent.color = "black";
    }

    if (connection) {
      connection[direction] = x;
    }
    else {
      this.root = x;
    }
  }

  //returns boolean
  search(target) {
  }

  //remove node if it exists
  remove(val) {
  }

}

let rbTree = new RedBlackTree();
rbTree.insert(5);
rbTree.insert(2);
rbTree.insert(8);
rbTree.insert(1);
rbTree.insert(0);
console.log(rbTree);
console.log(rbTree.root.left.color);
