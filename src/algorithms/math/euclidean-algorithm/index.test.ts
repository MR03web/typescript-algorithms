import euclideanAlgorithm from "./index";

describe("euclideanAlgorithm", () => {
  it("should calculate GCD", () => {
    expect(euclideanAlgorithm(0, 0)).toBe(0);
    expect(euclideanAlgorithm(-462, -1071)).toBe(-21);
  });
});
