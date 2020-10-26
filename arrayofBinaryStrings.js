//input: positive integer n
// array of binary strings of length n that do not contain consecutive ones

//input: 2
//output: 00, 01, 10

//3
//output 000, 001, 010, 100, 101

//4
//output 0000, 0010. 0101, 0001, 1000, 1010, 10001
//2*n - 1

//constraints
//time: O(2^n)
//space O(2^n)

/*
                      ''
                    /    \
                   0       1             
                00  01      10
            000  001  010   101  100       
               
loop through string
if previous char is 1
  subsequent char cannot be 1, so 
  return 0
return 1

*/
