"use strict";

const { everybodyBubbleUp, settleDownYall, remove } = require("../lib/utils");
const { logSourceSortingCriterion } = require("../lib/log-source-utils");

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise((resolve, reject) => {
    everybodyBubbleUp(logSources, logSourceSortingCriterion);

    while (logSources.length) {
      if (!logSources[0].drained) {
        printer.print(logSources[0].last);
        logSources[0].popAsync();

        settleDownYall(logSources, logSourceSortingCriterion);
      } else {
        remove(logSources[0], logSources, logSourceSortingCriterion);
      }
    }

    printer.done();

    resolve(console.log("Async sort complete."));
  });
};
