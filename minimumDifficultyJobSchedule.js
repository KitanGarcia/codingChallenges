/*
 *https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/


  example 1:
    jobDifficulty = [6, 5, 4, 3, 2, 1], d = 2
    Output 7
    explanation: finish first 5 jobs on 1st day, then finish the last on the 2nd day
    [6, 5, 4, 3, 2 | 1]
    Output is max of arr1 + max of arr2

    You could do 
    [6, 5, 4, 3 | 2, 1]
    [6, 5, 4 | 3, 2, 1]
    etc.
    but we want the minimum which would be
    [6, 5, 4, 3, 2 | 1]

  jobs need to be finished in order from left to right


  example 2:
  jobDifficulty = [9, 9, 9], d = 4
  Output -1
  Cannot divide 3 jobs into 4 days

  example 3:
  jobDifficulty = [7, 1, 7, 1, 7, 1], d = 3
  Output 15
  [7, 1, 7, 1 | 7 | 1]

  example 4:
  jobDifficulty = [11, 111, 22, 222, 33, 333, 44, 444], d = 6
  Output = 843
  [11 | 111 | 22 | 222 | 33 | 333, 44, 444]

*/

/*
 * recursive tree
 *
 * 6, 5, 4, 3, 2, 1                                                   d = 3
 *
 *  xxxxx|1       xxxx|21    xxx|321    xx|4321    x|54321            d = 2
 *     //\\
 *xxx|2|1  xxx|32|1  xx|432|1  x|5|4321                               d = 1
 *
 *
 * Recursive tree with d levels
 *
 *
 * index
 *       0        j  j+1  i
 *       xxxxxxxxxx | xxxxx size, d
 *                    -----
 *          d-1         1
 *      ----------- + max(cost of finish j + 1 to index in one day)
 *
 *      max_cost
 *
 *      dp = [[float("inf")] for _ in range(d) for _ in range(size)]
 *      for i in range(size):
 *        dp[i][0] = max_cost[0][i]
 *
 *      for i in range(size):
 *        for j in range(index):
 *          for d in range(1, d):
 *            dp[index][d] = dp[j][d - 1] + max_cost(j + 1, index)
 *      return dp[-1][-1]
 *                            d=1    d=2
 *  index = 0 item = 6        6      x
 *  index = 1                 6      11      //6 and 5 divided into 2 days
 *  index = 2                 6      10/11   //6, 5 | 4 or 6 | 5, 4
 *  index = 3                 6
 *  index = 4                 6
 *  index = 5                 6
 *
 *      max_cost from r to c
 *  0  1  2  3  4  5  c
 *  6, 5, 4, 3, 2, 1
 *---------------------
 *r 6  6  6  6  6  6
 *     5  5  5  5  5
 *        4  4  4  4
 *           3  3  3
 *              2  2
 *                 1
 *                 -
 *              ----
 *           -------
 *        ----------
 *     -------------
 *  ----------------
 *  
 *
 *  helper(d, index):
 *    result = infinity
 *    for j in range(0, index):
 *      result = min(result, helper(d - 1, j) + max_cost(j + 1, index))
 *    return result
*/
function minimumDifficult(difficulty, d) {
}
