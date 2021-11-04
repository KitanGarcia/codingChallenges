/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 */


/*
          121     reversed = 0 + 1 = 1; x = 12
          121     reversed = 10 + 2 = 12; x = 1
          121     reversed = 120 + 1 = 121; x = 0
          121     !(original - reversed) = !(121 - 121) = !0 = true

 */
function isPalindrome(x) {
  if (x >= 0 && x < 10) {
    return true;
  }
  if (x < 0 || x % 10 === 0) {
    return false;
  }

  let original = x;
  let reversed = 0;

  while (x !== 0) {
    reversed = reversed * 10 + x % 10;
    x = Math.trunc(x / 10);
  }
  return !(original - reversed);
}



function isPalindromeString(x) {
  let string = x.toString();

  let start = 0;
  let end = string.length - 1;

  while (start <= end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(5));
console.log(isPalindrome(1400));
console.log(isPalindrome(1441));

console.log(isPalindromeString(121));
console.log(isPalindromeString(5));
console.log(isPalindromeString(1400));
console.log(isPalindromeString(1441));
