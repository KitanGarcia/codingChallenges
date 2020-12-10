/*
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list
 * If there are two middle nodes, return the second middle node
 */

function middleOfList(head) {
  let array = [];
  
  let current = head;
  while (current !== null) {
    array.push(current);
    current = current.next
  }
  return array[Math.ceil((array.length - 1) / 2)];
}

//Better solution
function middleOfList2(head) {
  let lo = head, hi = head;
  while (hi && hi.next) {
    lo = lo.next;
    hi = hi.next.next;
  }
  return lo;
}
