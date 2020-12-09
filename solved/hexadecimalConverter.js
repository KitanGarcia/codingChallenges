/*
 * Given a positive integer (including 0), convert it to its hexadecimal representation
  0 => '0'
  1 => '1'
  2 => '2'
  3 => '3'

  9 => '9'
  10 => 'a'
  11 => 'b'

  15 => 'f'
  16 => '10'

  30 => '1e'
  31 => '1f'
  32 => '20'

  255 => 'ff'
  256 => '100'

  Constraints: 
  Time Complexity: O(log(N))
  Space Complexity: O(log(N))
  Use pure recursion

  58
  58 / 16 = 3
  58 % 16 = 10
  58 = 3a

  30
  30 /16 = 1
  30 % 16 = 14
  30 = 1e
 */

//not recursive
function convertToHex(value) {
  digits = "0123456789abcdef";
  return Math.floor(value / 16) + digits[value % 16];
}

/*
 * -> 70
 * 4
 * 4 % 16 = 4
 * 70 % 16 = 6
 * 46
 */
//pure recursion
function convertToHex2(value) {
  digits = "0123456789abcdef";
  if (value < 16) {
    return digits[value];
  }

  return convertToHex2(Math.floor(value / 16)) + digits[value % 16];
}

console.log(convertToHex(58));
console.log(convertToHex(30));

console.log(convertToHex2(58));
console.log(convertToHex2(30));
console.log(convertToHex2(16));
console.log(convertToHex2(250));
