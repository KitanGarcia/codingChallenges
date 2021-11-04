/*
In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one). 


(1) Only one disk can be moved at a time.

(2) A disk is slid off the top of one tower onto another tower.

(3) A disk cannot be placed on top of a smaller disk.

Write a program to move the disks from the first tower to the last using stacks.
 */


/*
 *                  |              |              |
 *                  0              |              |
 *                              becomes
 *                  |              |              |
 *                  |              |              0
 *
 *
 *
 *
 *                  1              |              |
 *                  0              |              |
 *                              becomes
 *                  |              |              |
 *                  0              1              |
 *                              becomes
 *                  |              |              |
 *                  |              1              0
 *                              becomes
 *                  |              |              1
 *                  |              |              0
 */

function towersOfHanoiRecursive(n) {
  let start = [];
  let mid = [];
  let end = [];

  if (n <= 0) {
    return end;
  }

  //initialize starting tower
  for (let i = 0; i < n; i++) {
    start.push(i);
  }


  function recurse(source, intermediate, destination, n) {
    if (n <= 0) {
      return;
    }
    //move from source to intermediate, using destination as the intermediate step
    recurse(source, destination, intermediate, n - 1);

    console.log(`moving ${source[source.length - 1]} to ${destination}`);
    destination.push(source.pop());

    //move from intermediate to destination, using source as the intermediate step
    recurse(intermediate, source, destination, n - 1);
  }
  recurse(start, mid, end, n);

  return end;
}

console.log(towersOfHanoiRecursive(4));
