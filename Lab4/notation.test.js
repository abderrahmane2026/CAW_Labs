const mean = require("./notation");

describe("mean function", () => {
  test("calculates the mean of an array of numbers", () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
    expect(mean([10, 20, 30])).toBe(20);
    expect(mean([5, 5, 5, 5, 5])).toBe(5);
    expect(mean([-2, -4, -6])).toBe(-4);
  });

  test("returns NaN for an empty array", () => {
    expect(mean([])).toBeNaN();
  });
});
