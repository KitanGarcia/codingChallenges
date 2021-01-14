/*
  Determine the height of a heap

  input: [3, 4, 7, 6, 12, 9, 10, 16, 20, 13, 17, 30, 15, 11, 14]
  output: 4
*/




/*
  To help visualize, we represent the heap like so:
                                                3
                                        4               7
                                     6     12        9     10
                                  16  20 13  17    30 15  11 14

  We ask and find that just the root is height 1

  Let's look at smaller examples:
              3             height = 1, num elements = 1

              3
            4   8           height = 2, num elements = 3

              3
            4   8           
           5 6 9 10         height = 3, num elements = 7

              3
      4               7
   6     12        9     10
16  20 13  17    30 15  11 14    height = 4, num elements = 15


If the leaves are not full:
              3
      4               7
   6     12        9     10
16                               height = 4, num elements = 8





If we have all leaves full: 2 ^ height - 1 = numElements
                            2 ^ height = numElements + 1
                            log(2 ^ height) = log(numElements + 1)
                            height * log(2) = log(numElements + 1)
                            height = log(numElements + 1) / log(2)

For numElements = 15:
  height = log(15) / log(2) = 3.9

For numElements = 8:
  height = log(9) / log(2) = 3.17
  Take ceiling ---> 4


For numElements = 12:
  height = log(13) / log(2) = 3.7
  Take ceiling ---> 4

Algorithm:
  1. Get number of elements
  2. Height = log(number of elements + 1) / log(2)
*/
