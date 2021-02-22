/*
Given a string of lowercase characters (a-z), return the length of the longest palindromic subsequence.

Subsequence: a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

For example, the sequence ⟨A, B, D⟩ is a subsequence of ⟨A, B, C, D, E, F⟩ obtained after removal of elements C, E, and F.

Input:  "vtvvv"
Output: 4
Longest palindromic subsequence here is "vvvv"


Input:  "pwnnb"
Output: 2
Longest palindromic subsequence here is "nn"


Input:  "ttbtctcbt"
Output: 7
Longest palindromic subsequence here is "tbtctbt"
 */

/*
 * Find subsequences
 * Then check to see if they are palindromes
 * Then take length of palindromes and find max
 *                                                    i
 *                                                    vtvvv
 *                      i                                                             i
 *                      tvvv                                                         vtvvv
 *     i                               i                                 i                             i
 *     vvv                            tvvv                              vvvv                         vtvvv
 */
function longestPalindromicSubsequence(input) {
  let max = 0;

  function findSubsequences(substring, index) {
    //we have a subsequence. It is longer than deleting anything else, so we stop here
    if (isPalindrome(substring)) {
      if (max < substring.length) {
        max = substring.length;
      }
      return;
    }
    
    if (index >= substring.length) {
      return;
    }

    //2 choices: delete a char. OR. Move on -> don't delete, but add index
    
    //delete char
    findSubsequences(substring.slice(0, index) + substring.slice(index + 1), index);

    //look at next char
    findSubsequences(substring, index + 1);

    //console.log(substring);
  }

  findSubsequences(input, 0);
  return max;
}

function isPalindrome(input) {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    if (input[left] !== input[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}



/*                                        0   4
 *                                        vtvvv  2+2
 *                                         1 3
 *                                        vtvvv  2+Max(2, 1)
 *                   23                                                         12
 *                 vtvvv  2                                                    vtvvv  2+1
 *                                                                   s                              s
 *                                                                 vtvvv  1                        vtvvv  1
 *              
 */
function LPSMemo(input) {
  let memo = {};
  function findSubsequence(left, right) {
    //there is only one character
    if (left === right) {
      return 1;
    }

    //there are only two character which are the same
    if (input[left] === input[right] && left + 1 === right) {
      return 2;
    }

    //first and last character are the same
    if (input[left] === input[right]) {
      return findSubsequence(left + 1, right - 1) + 2;
    }

    if (memo.hasOwnProperty(left + "_" + right)) {
      return memo[left + "_" + right];
    }

    memo[left + "_" + right] = Math.max(findSubsequence(left + 1, right), findSubsequence(left, right - 1));
    return memo[left + "_" + right];
  }
  return findSubsequence(0, input.length - 1);
}

console.log(longestPalindromicSubsequence("vtvvv"));
console.log(longestPalindromicSubsequence("pwnnb"));
console.log(longestPalindromicSubsequence("ttbtctcbt"));


console.log(LPSMemo("vtvvv"));
console.log(LPSMemo("pwnnb"));
console.log(LPSMemo("ttbtctcbt"));
