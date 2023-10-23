const { bubbleUp, settleDown, remove, parentIdx } = require("../lib/utils");

describe("bubbleUp", () => {
  it("should swap elements up the heap if the child is smaller than the parent", () => {
    const data = [10, 2];
    bubbleUp(data, 1);
    expect(data).toEqual([2, 10]);
  });

  it("should handle swap when first element is bubbleUped", () => {
    const data = [10, 2];
    bubbleUp(data, 0);
    expect(data).toEqual([10, 2]);
  });

  it("should not swap elements up the heap if the child is larger than the parent", () => {
    const data = [2, 10];
    bubbleUp(data, 1);
    expect(data).toEqual([2, 10]);
  });
});

describe("settleDown", () => {
  it("should swap elements down the heap if the child is larger than the parent", () => {
    const data = [10, 2];
    settleDown(data, 0);
    expect(data).toEqual([2, 10]);
  });

  it("should handle swap when last element is settleDowned", () => {
    const data = [10, 2];
    settleDown(data, 1);
    expect(data).toEqual([10, 2]);
  });

  it("should not swap elements down the heap if the child is smaller than the parent", () => {
    const data = [2, 10];
    settleDown(data, 0);
    expect(data).toEqual([2, 10]);
  });
});

describe("parentIdx", () => {
  it("should return the index of the parent node of the given index", () => {
    expect(parentIdx(1)).toEqual(0);
    expect(parentIdx(5)).toEqual(2);
    expect(parentIdx(6)).toEqual(2);
  });
});

describe("remove", () => {
  it("should remove the given element when it is the only element of the given heap", () => {
    const data = [2];
    remove(2, data);
    expect(data).toEqual([]);
  });

  it("should remove the given element from the given heap and re-sort", () => {
    const data = [1, 2, 10, 4, 5, 11, 12];
    remove(2, data);
    expect(data).toEqual([1, 4, 10, 12, 5, 11]);
  });

  it("should remove the given element when it is the only element of the given heap", () => {
    const data = [1, 2, 10, 4, 5, 11, 12];
    remove(12, data);
    expect(data).toEqual([1, 2, 10, 4, 5, 11]);
  });
});
