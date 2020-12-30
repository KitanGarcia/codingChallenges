/*
  We have a collection of stones, each stone has a positive integer weight.

  Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

  If x == y, both stones are totally destroyed;
  If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
  At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

  Input: [2,7,4,1,8,1]
  Output: 1
  Explanation: 
  We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
  we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
  we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
  we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
*/

let array = [2,7,4,1,8,1];

//EASY SOLUTION
var lastStoneWeightEasy = function(stones) {
  stones = stones.sort((a, b) => a - b);
  
  while (stones.length > 1) {
    //take difference between the 2 heaviest stones and remove from array
    let difference = stones.pop() - stones.pop();

    //find index to insert the difference
    if (difference > 0) {
      let index = 0;
      while (difference > stones[index]) {
        index++;
      }
      stones.splice(index, 0, difference);
    }
  }
  
  //return the last remaining stone or 0 if all are destroyed
  return stones.length ? stones[0] : 0;
};

//FASTER AND MEMORY EFFICIENT HEAP SOLUTION
//create a max heap and smash stones until 1 or 0 left. Remove and return the last one or 0 if heap is empty
var lastStoneWeightHeap = function(stones) {
  const heap = new MaxHeap(stones);
  while (heap.size() > 1) {
    const max1 = heap.remove();
    const max2 = heap.remove();

    if (max1 > max2) {
      heap.add(max1 - max2);
    }
  }

  return heap.size() === 1 ? heap.remove() : 0;
  
};

class MaxHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => b - a;
    this.heapify();
  }

  //O(nlog(n))
  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  //O(1)
  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  //O(log(n))
  add(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  //O(log(n))
  //remove the last element, assign it to the first, and bubble it down. Effectively removes and returns the first element
  remove() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();

    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  //O(log(n))
  //Compare index to parent index. If greater than parent, swap.
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      }
      else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex =  this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
        findIndex = leftIndex;
      }

      if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      }

      else {
        break;
      }
    }
  }


  //O(1)
  swap(index1, index2) {
    [ this.data[index1], this.data[index2] ] = [ this.data[index2], this.data[index1] ];
  }
  
  //O(1)
  size() {
    return this.data.length;
  }
}
