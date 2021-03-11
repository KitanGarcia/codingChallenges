/*
 *https://leetcode.com/problems/insert-delete-getrandom-o1/

Implement the RandomizedSet class:

bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
Follow up: Could you implement the functions of the class with each function works in average O(1) time?

 
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
 */

/*
 *import java.util.*;

class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");

    RandomizedSet set = new RandomizedSet();
    set.insert(1);
    set.remove(2);
    set.insert(2);
    set.getRandom(3);
    set.remove(1);
    set.insert(1);
    set.insert(2);
    set.insert(3);
    set.insert(4);
    set.insert(5);
    set.getRandom(5);
  }
}
*/

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */

class RandomizedSet {
    Map<Integer, Integer> indexMap;
    // Map<Integer, List<Integer>> indexMap
    List<Integer> values;
    Random rand = new Random();

    /** Initialize your data structure here. */
    public RandomizedSet() {
        indexMap = new HashMap();
        values = new ArrayList();
    }
    
    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    public boolean insert(int val) {
        boolean result = true;

        if (indexMap.containsKey(val)) {
            result = false;
        } else {
            indexMap.put(val, values.size());
            values.add(values.size(), val);
        }
        
        System.out.println("insert(" + val + "): " + result);
        return result;
    }
    
    /** Removes a value from the set. Returns true if the set contained the specified element. */
    public boolean remove(int val) {
        boolean result = true;

        if (!indexMap.containsKey(val)) {
            result = false;
        } else {
            // "swap" val with last element
            int lastValue = values.get(values.size() - 1);
            int indexOfVal = indexMap.get(val);
            // replace val with last element
            values.set(indexOfVal, lastValue);
            indexMap.put(lastValue, indexOfVal);

            // delete/cleanup
            values.remove(values.size() - 1);
            indexMap.remove(val);
        }

        System.out.println("delete(" + val + "): " + result);
        return result;
    }
    
    /** Get a random element from the set. */
    public int getRandom() {
        int val = values.get(rand.nextInt(values.size()));

        System.out.println("getRandom(): " + val);

        return val;
    }

    public void getRandom(int repeat) {
        for (int i = 0; i < repeat; i++) {
            getRandom();
        }
    }
}
