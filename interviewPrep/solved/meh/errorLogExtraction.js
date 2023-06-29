/*
 * Find logs with CRITICAL or ERROR, sort them by time of day, and return the array
 * Complete the 'extractErrorLogs' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts 2D_STRING_ARRAY logs as parameter.
 */

function extractErrorLogs(logs) {
  // Create result array of error logs
  let errorLogs = [];

  // Loop through and find bad logs
  for (let log of logs) {
    if (log[2] === "ERROR" || log[2] === "CRITICAL") {
      errorLogs.push(log);
    }
  }

  // Sort errors according to date and time of day
  errorLogs.sort((a, b) => {
    let aDate = a[0];
    let bDate = b[0];

    aDate = a[0].split("-");
    bDate = b[0].split("-");

    let aTime = a[1].split(":");
    let aHours = parseInt(aTime[0]);
    let aMinutes = parseInt(aTime[1]);

    let bTime = b[1].split(":");
    let bHours = parseInt(bTime[0]);
    let bMinutes = parseInt(bTime[1]);

    return (
      new Date(aDate[2], aDate[1], aDate[0], aHours, aMinutes) -
      new Date(bDate[2], bDate[1], bDate[0], bHours, bMinutes)
    );
  });

  return errorLogs;
}
