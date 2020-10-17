/*
1. Save B as a temp variable.
2. Set B equal to A % B.
3. Set A equal to the temp.
4. Repeat steps 1-3 until B equals 0.
5. Return A.
*/

//This function assumed 2 integers, where int1 > int2
function GCD (int1, int2) {
  let A = int1;
  let B = int2;

  //if inputs are negative, convert to positive
  if (A < 0) {let A = A * -1;}
  if (B < 0) {let B = B * -1;}
  //let temp;

  /*
  if (A < B) {
    temp = A;
    A = B;
    B = temp;
  }
  */

  //use destructuring to refactor above
  if (A < B) {
    [A, B] = [B,A];
  }




  /*
  while (B > 0) {
    temp = B
    B = A % B;
    A = temp;
  }
  */

  //use destructuring to refactor above
  while (B > 0) {
    [A, B] = [B, A % B];
  }
  return A;
}




//a more concise refactored solution
//the swapping of a and b if a < b is unnecessary
/*
function GCD(a, b) {
  if (a < 0) {a *= -1;}
  if (b < 0) {b *= -1;}

  while (b > 0) {[a, b} = [b, a % b]}
  return a;
}
*/

console.log(GCD(36, 24));
