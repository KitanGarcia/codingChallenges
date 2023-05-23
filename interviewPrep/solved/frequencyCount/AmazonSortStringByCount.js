/*
Sort the letters in the given input word to be arranged by decreasing order of counts.
Input: "beeaap"
Output: "aaeebp"
*/

const sortByCounts = (input) => {
  if (input.length === 0) {
    return "";
  }

  // Store letters with their counts
  let result = "";
  let letterCounts = {};
  for (let letter of input) {
    // Either initialize count as 1, or add 1
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  // Sort letters in descending order of counts
  const sortedLetters = Object.keys(letterCounts).sort((a, b) => {
    return letterCounts[b] - letterCounts[a];
  });

  // Append letters to result repeated according to count
  for (let letter of sortedLetters) {
    result += letter.repeat(letterCounts[letter]);
  }

  return result;
};

console.log(sortByCounts("beeaap"));
