const logSourceSortingCriterion = (logSource) => {
  return logSource.last.date.getTime();
};

module.exports = {
  logSourceSortingCriterion,
};
