import selectionSort from "./index";

describe("selectionSort", () => {
  it("should sort array", () => {
    expect(selectionSort([2, 34, 6, 98, 45, 12])).toEqual([
      2,
      6,
      12,
      34,
      45,
      98
    ]);
  });
});
