const LogSource = require("../lib/log-source");
const { logSourceSortingCriterion } = require("../lib/log-source-utils");

describe("logSourceSortingCriterion", () => {
  it("should return the date from the .last property of the logSource", () => {
    const source = new LogSource();
    const date = source.last.date.getTime();
    expect(logSourceSortingCriterion(source)).toBe(date);
  });
});
