"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const allLogs = [];

  let log;

  logSources.forEach((logSource) => {
    while ((log = logSource.pop())) {
      if (log) allLogs.push(log);
    }
  });

  allLogs.sort((a, b) => {
    return a.date - b.date;
  });

  allLogs.forEach((log) => {
    printer.print(log);
  });

  printer.done();
  return console.log("Sync sort complete.");
};
