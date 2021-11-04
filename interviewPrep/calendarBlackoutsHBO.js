/*
  Given a list of blackout ranges for the month, return a 2D array of available dates. Assume that a month starts on day 1 and ends on day 30

  input: [[7, 7], [2, 5], [15, 23]]
  output: [[1]. [6], [8, 14], [24, 30]]

  By asking questions, we find that:
  Blackout ranges can overlap
  They don't have to start at the beginning or end of the month
  They do not need to be in a sorted order

  We can sort and assume we just have it sorted, unless we can come up with good way to sort it

*/
