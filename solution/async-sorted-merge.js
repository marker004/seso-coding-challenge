"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    const allLogs = [];

    const nextLog = (logSource) => {
      return logSource.popAsync().then((result) => {
        if (result) {
          allLogs.push(result);

          return nextLog(logSource);
        } else {
          return result;
        }
      });
    };

    Promise.all(
      logSources.map((logSource) => {
        return nextLog(logSource);
      })
    ).then(() => {
      allLogs.sort((a, b) => {
        return a.date - b.date;
      });

      allLogs.sort((a, b) => {
        return a.date - b.date;
      });

      console.log(allLogs.length);
      allLogs.forEach((log) => {
        printer.print(log);
      });

      printer.done();
      resolve(console.log("Async sort complete."));
    });
  });
};
