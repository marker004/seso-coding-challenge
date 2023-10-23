"use strict";

// Print all entries, across all of the sources, in chronological order.

const { everybodyBubbleUp, settleDownYall, remove } = require("../lib/utils");
const { logSourceSortingCriterion } = require("../lib/log-source-utils");

module.exports = (logSources, printer) => {
  everybodyBubbleUp(logSources, logSourceSortingCriterion);

  while (logSources.length) {
    if (!logSources[0].drained) {
      printer.print(logSources[0].last);
      logSources[0].pop();

      settleDownYall(logSources, logSourceSortingCriterion);
    } else {
      remove(logSources[0], logSources, logSourceSortingCriterion);
    }
  }

  printer.done();

  return console.log("Sync sort complete.");
};
