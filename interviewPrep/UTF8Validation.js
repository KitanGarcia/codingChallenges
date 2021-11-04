/*
 
https://leetcode.com/problems/utf-8-validation/

A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:

For 1-byte character, the first bit is a 0, followed by its unicode code.
For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10.
This is how the UTF-8 encoding would work:

   Char. number range  |        UTF-8 octet sequence
      (hexadecimal)    |              (binary)
   --------------------+---------------------------------------------
   0000 0000-0000 007F | 0xxxxxxx
   0000 0080-0000 07FF | 110xxxxx 10xxxxxx
   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

Given an array of integers representing the data, return whether it is a valid utf-8 encoding.

Note:
The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.

Example 1:

data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.
11000101  --> 110 -> length = 2
10000010  --> 10 -> continuation byte
00000001  --> 0 -> length = 1
Valid UTF-8 Sequence

Return true.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.
Example 2:

data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.
11101011  --> 1110 -> length = 3
10001100  --> 10 -> continuation byte
00000100  --> 00 -> not a continuation byte. Does not start with 10
False

Return false.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid.


Let's make an example:
U+0939
Octal representation of 0939: 004471
Binary representation of above: 0000 1001 0011 1001
1110 0000       10 100100       10 111001
     ____          ______          ______
      4              6               6
*/





/*
 *
 * ANOTHER BETTER WAY IS TO AND THE STRING WITH A BITMASK: 1<<7, 1<<6, 1<<5, AND SO ON UNTIL THE AND IS 0
 *
 *
string manipulation: requires extra space
Considerations:
  Length = 1-4 bytes
  if data > 255, take the 8 least significant bits


Algorithm:
1. Iterate through input data
2. Convert to binary string
3. Check prefix to see:
     # of bytes for UTF-8 char
     continuation byte
   Check for invalid scenarios
     too many bytes
     can't start with 10 if not a continuation byte
4. Decrease bytes counter
5. Check bytes remaining === 0

Parameters:
bytes remaining
*/

function validate(array) {
  let bytesRemaining = 0;
  //1. Iterate through input data
  for (let i = 0; i < array.length; i++) {
    //convert to binary string
    //pad the 0s
    //take the least significant 8 bits
    /*
     * Java:
     String binary = Integer.toBinaryString(arrau[i]);
     binary = binary.length() >= 8 ? binary,substring(binary.lengt() - 8) : "00000000".substring(binary.length() % 8 + binary
     */

    //3. Check prefix to see: # of bytes and continuation byte
    if (bytesRemaining === 0) {
      //locate the first 0 to determine the length
      for (let j = 0; j < binary.length; j++) {
        if (binary.charAt(j) !== "0") {
          bytesRemaining++;
        }
        else {
          break;
        }
      }

      /*
       * IF USING THE BITMASK METHOD, REPLACE THE ABOVE FOR LOOP CONTENTS WITH THE BELOW
         let bitmask = 1 << 7;
         while ((data[i] & bitmask) !== 0) {
           bytesRemaining++;
           bitmask = bitmask >> 1;
         }
       */

      //for length === 1
      //don't want to trigger false for this case
      if (bytesRemaining === 0) {
        continue;
      }

     //Check for invalid scenarios: too many bytes; can't start with 10 if not a continuation byte
      if (bytesRemaining > 4 || bytesRemaining === 1) {
        return false;
      }
      else {
        //look for continuation byte
        //continuationByte = 10xxxxxx
        if (!(binary.charAt(0) === "1" && binary.charAt(1) === "0")) {
          return false;
        }

        /* IF USING THE BITMASK METHOD REPLACE THE INSIDE OF THIS ELSE WITH:
           let bitmask_10000000 = 1 << 7;
           let bitmask_01000000 = 1 << 6;
           if (!(data[i] & bitmask_10000000) !== 0 && (data[i] & bitmask_01000000 === 0)) {
             return false;
           }
         */
      }
      bytesRemaining--;
    }
    //check bytes remaining
    return bytesRemaining === 0;
  }
}
