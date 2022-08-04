/*
 Leetcode 10
 *Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
*/
function isMatchV2(s, p) {
  var lenS = s.length;
  var lenP = p.length;
  var map = {};

  return check(0, 0);

  function check(idxS, idxP) {
    if (map[idxS + ":" + idxP] !== undefined) return map[idxS + ":" + idxP];
    if (idxS > lenS) return false;
    if (idxS === lenS && idxP === lenP) return true;

    if (p[idxP] === "." || p[idxP] === s[idxS]) {
      map[idxS + ":" + idxP] =
        p[idxP + 1] === "*"
          ? check(idxS + 1, idxP) || check(idxS, idxP + 2)
          : check(idxS + 1, idxP + 1);
    } else {
      map[idxS + ":" + idxP] =
        p[idxP + 1] === "*" ? check(idxS, idxP + 2) : false;
    }
    return map[idxS + ":" + idxP];
  }
}

const isMatch = (s, p) => {
  // returns true if both string and pattern are empty; false otherwise
  if (!p) {
    return !s;
  }

  // check if current char of string and pattern match when string has chars
  // basically if s still exists and has a matching char with p or p is .
  const hasFirstCharMatch = Boolean(s) && (p[0] === "." || p[0] === s[0]);

  // track when * is next in line in the pattern
  if (p[1] === "*") {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char.
    return (
      isMatch(s, p.slice(2)) || (hasFirstCharMatch && isMatch(s.slice(1), p))
    );
  }

  // now we know for sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // if so, then can proceed with next string and pattern chars (s+1, p+1)
  return hasFirstCharMatch ? isMatch(s.slice(1), p.slice(1)) : false;
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aa", ".*"));

console.log(isMatchV2("aa", "a"));
console.log(isMatchV2("aa", "a*"));
console.log(isMatchV2("aa", ".*"));
