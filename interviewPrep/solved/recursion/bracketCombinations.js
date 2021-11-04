/*
 * Google Problem
 * Have the function BracketCombinations(num) read num which will be an integer greater than or equal to 0, and return the number of valid combinations that be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parentheses: ()()(), are ()()(), ()(()), ((())), abd (()()).
 * There are a total of 5 combinations when the input is 3, so your program should return 5.
 *
 * Input: 3
 * Output: 5
 *
 * Time Constraint: O(2^n)
 * Space Constraint: O(2^n)
 *
 *
 * Our own example:
 * Input: 2
 * Output: 2
 * ()(), (())
 *                                ""
 *                  (                            )
 *         ((               ()          ()               ))
 *    (((      (()      ()(    ())  (()    ())       ())    _)))
 *         (()(   (())    ())  (()    ())       ())    _)))
 *
 *
 *
 *                  current, openBank, closeBank
 *                              ""
 *                             2,2
 *                (                             )
 *              1,2                            2,1
 *
 *         ((                ()
 *        0,2               1,1        
 *
 *     (((    (()        ()(    ())
 *    -1,2    0,1        0,1    1,0
 *
 *         (()(  (())  ()(( ()()
 *         -1,1   0,0  -1,1  00
 *
 */


function bracketCombinations(num) {
  function traverse(current, openBank, closeBank) {
    if (closeBank < openBank) {
      return 0;
    }
    if (openBank < 0 || closeBank < 0) {
      return 0;
    }
    if (openBank === 0 && closeBank === 0) {
      return 1;
    }
    
    return traverse(current + "(", openBank - 1, closeBank) + traverse(current + ")", openBank, closeBank - 1);
  }

  return traverse("", num, num);
}

console.log(bracketCombinations(3));
console.log(bracketCombinations(8));
