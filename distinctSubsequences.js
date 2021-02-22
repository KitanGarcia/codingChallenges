/*
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).


Input 1:  "rabbbit", "rabbit"
Output 1: 3    

Subsequences:
rabbbit --> rabbit
^^^^ ^^
rabbbit --> rabbit
^^ ^^^^
rabbbit --> rabbit
^^^ ^^^

Input 2:  "a", "" 	           
Output 2: 1 ("a" --> "")   



Time Complexity: O(N * M) with N being the length of string, and M being the length of the subsequence.
Auxiliary Space Complexity: O(N)   
 */

/*
 * Remove chars of S such that T contains all characters in S.
 * S = ABCDE, T = ACE
 * Delete B and D to get ACE
 *
 *
 *
 *                                                        ABCDE
 *                            BCDE                                                      ABCDE
 *          CDE                        BCDE                                ACDE                        ABCDE
 *    DE           CDE           BDE          BCDE                   ADE           ACDE        ABDE           ABCDE
 *  E    DE       
 *
 * 2 choices: Delete char or move to the next one. Keep track of index so we know where to delete
 *
 */
function subsequences(S, T) {
  function helper(substring, index) {
    if (substring === T) {
      return 1;
    }
    if (substring.length === 0 || index >= substring.length) {
      return 0;
    }


    //delete char or move to next one and delete at incremented index
    //delete char
    let deleteChar = helper(substring.slice(0, index) + substring.slice(index + 1), index);

    //look at next index
    let lookNext = helper(substring, index + 1);

    return deleteChar + lookNext;
  }
  return helper(S, 0);
}


function subsequencesMemo(S, T) {
  let n = S.length;
  let m = T.length;
  let memo = {};

  function helper(i, j) {
    if (i == n) {
      return 1 ? j == m : 0;
    }
    if (j == m) {
      return 1;
    }

    if (memo.hasOwnProperty(i + "_" + j)) {
      return memo[i + "_" + j];
    }

    //For each char in S, if equal to char in T, either keep it or not
    //if not equal to T, skip
    let ans = 0;
    if (S[i] === T[j]) {
      ans += helper(i + 1, j + 1) + helper(i + 1, j);
    }
    else {
      ans += helper(i + 1, j);
    }

    memo[i + "_" + j] = ans;
    return ans;
  }
  let answer = helper(0, 0);
  console.log(memo);
  return answer;
}

console.log(subsequences("ABCDE", "ACE"));
console.log(subsequences("rabbbit", "rabbit"));
console.log(subsequences("babgbag", "bag"));


console.log(subsequencesMemo("ABCDE", "ACE"));
console.log(subsequencesMemo("rabbbit", "rabbit"));
console.log(subsequencesMemo("babgbag", "bag"));
