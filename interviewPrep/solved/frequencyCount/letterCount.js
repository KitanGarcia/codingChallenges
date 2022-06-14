function LetterCount(str) {
  // code goes here
  if (str.length < 1) {
    return -1;
  }

  let words = str.split(" ");
  let maxCount = 0;
  let maxDict = {};

  for (word of words) {
    let counts = {};
    let letterMax = 0;

    // Count occurrences of each letter for each word
    for (i = 0; i < word.length; i++) {
      if (!counts[word[i]]) {
        counts[word[i]] = 0;
      }
      counts[word[i]]++;

      // Find most frequent letter in word
      if (letterMax < counts[word[i]]) {
        letterMax = counts[word[i]];
      }
    }

    // Find global maximums
    if (maxCount < letterMax) {
      maxCount = letterMax;
      maxDict[maxCount] = word;
    }
  }

  return maxCount > 1 ? maxDict[maxCount] : -1;
}

// keep this function call here
console.log(LetterCount(readline()));
