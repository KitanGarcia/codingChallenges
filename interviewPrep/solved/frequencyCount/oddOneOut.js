/*
 * In array of strings, find the series which does not follow the pattern of the others
 * Ie. ["ABC", "BCD", "CEF"]
 * Output: "CEF"
 */

// NOTE: This solution should be able to be further optimized by ending execution in the last if statement
function findOdd(series) {
  // key: diff1_diff2... value: [string of series, numberOfOccurrences]
  let globalDifferences = {};

  // Loop through series
  for (let i = 0; i < series.length; i++) {
    // Create empty string to hold key to diffs hash
    let localDifferences = "";

    // Loop through string
    for (let j = 1; j < series[i].length; j++) {
      // Store differences in an array
      let asciiDistance =
        series[i][j].charCodeAt(0) - series[i][j - 1].charCodeAt(0);

      // Add key for indexing in form of "diff1_diff2_...diffn"
      if (j === series[i].length - 1) {
        localDifferences += asciiDistance;
      } else {
        localDifferences += asciiDistance + "_";
      }
    }

    // Add [series[i], count] to hash indexed by differences of series
    if (!globalDifferences.hasOwnProperty(localDifferences)) {
      globalDifferences[localDifferences] = [series[i], 0];
    }
    globalDifferences[localDifferences][1]++;
  }

  const keys = Object.keys(globalDifferences);
  for (let key of keys) {
    if (globalDifferences[key][1] == 1) {
      return globalDifferences[key][0];
    }
  }
}
