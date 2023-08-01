/*
 * Leetcode 139
  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note that the same word in the dictionary may be reused multiple times in the segmentation.

   

  Example 1:

  Input: s = "leetcode", wordDict = ["leet","code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".
  Example 2:

  Input: s = "applepenapple", wordDict = ["apple","pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
  Note that you are allowed to reuse a dictionary word.
  Example 3:

  Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  Output: false
 */

/*
    l   t   c   o     [lt, co]
    s   e             l
    s       e         lt set has lt; queue.push(2); add 0 to visited
    s           e     ltc; set does not have; inc e
    s               e ltco; set does not have; inc e

    Next, look at t (1)
    l   t   c   o     [lt, co]
            s   e     c
            s       e co; set has co && end == s.length --> return true
 */
var wordBreakDFS = function (s, wordDict) {
  if (wordDict === null || wordDict.length === 0) {
    return false;
  }
  const set = new Set(wordDict);

  const visited = new Set();
  let queue = [0]; // queue tracks index. Initialize to index 0

  while (queue.length) {
    // Get index of next letter
    const start = queue.shift();

    // We have not traversed the index
    if (!visited.has(start)) {
      // Go from next index to end of string
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.slice(start, end))) {
          if (end === s.length) {
            return true;
          }

          // Add next index to queue
          console.log(end);
          queue.push(end);
        }
      }

      // Mark index we just explored as visited
      visited.add(start);
    }
  }

  return false;
};

// Brute force
var wordBreak = function (s, wordDict) {
  let dict = new Set(wordDict);
  let result = false;

  const helper = (index, substring) => {
    if (index > s.length || substring > s.length) {
      result = result === true ? true : false;
      return;
    }

    if (index === s.length && dict.has(substring)) {
      console.log("TRUE", substring);
      result = true;
      return;
    }

    // if it is not a word, keep building substring and inc index
    if (!dict.has(substring)) {
      helper(index + 1, substring + s[index]);
    }

    // if it is a word
    else {
      // take the word
      helper(index + 1, s[index]);

      // keep building substring to find a better word
      helper(index + 1, substring + s[index]);
    }
  };
  helper(0, "");

  return result;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
