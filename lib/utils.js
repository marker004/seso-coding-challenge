const parentIdx = (childIndex) => Math.floor((childIndex + 1) / 2) - 1;

const bubbleUp = (data, index, sortingCriterion = (e) => e) => {
  const element = data[index];
  const score = sortingCriterion(element);

  while (index > 0) {
    const parentIndex = parentIdx(index);
    const parent = data[parentIndex];

    if (score >= sortingCriterion(parent)) break;

    data[parentIndex] = element;
    data[index] = parent;
    index = parentIndex;
  }
};

const settleDown = (data, index, sortingCriterion = (e) => e) => {
  const length = data.length;
  const element = data[index];
  const elementScore = sortingCriterion(element);

  while (true) {
    const child2Index = (index + 1) * 2;
    const child1Index = child2Index - 1;

    let swap = null;
    let child1Score;

    if (child1Index < length) {
      const child1 = data[child1Index];
      child1Score = sortingCriterion(child1);

      if (child1Score < elementScore) {
        swap = child1Index;
      }
    }

    if (child2Index < length) {
      const child2 = data[child2Index];
      const child2Score = sortingCriterion(child2);

      if (child2Score < (swap === null ? elementScore : child1Score)) {
        swap = child2Index;
      }
    }

    if (swap === null) break;

    data[index] = data[swap];
    data[swap] = element;
    index = swap;
  }
};

const everybodyBubbleUp = (data, sortingCriterion = (e) => e) => {
  for (let i = data.length - 1; i >= 0; i--) {
    bubbleUp(data, i, sortingCriterion);
  }
};

const settleDownYall = (data, sortingCriterion = (e) => e) => {
  for (let i = 0; i < data.length; i++) {
    settleDown(data, i, sortingCriterion);
  }
};

const remove = (element, data, sortingCriterion = (e) => e) => {
  const length = data.length;

  for (var index = 0; index < length; index++) {
    if (data[index] != element) continue;

    const endElement = data.pop();

    if (index == length - 1) break;

    data[index] = endElement;
    bubbleUp(data, index, sortingCriterion);
    settleDown(data, index, sortingCriterion);
    break;
  }
};

module.exports = {
  bubbleUp,
  settleDown,
  settleDownYall,
  remove,
  everybodyBubbleUp,
  parentIdx,
};
