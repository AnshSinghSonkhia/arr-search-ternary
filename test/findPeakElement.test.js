const findPeakElement = require("../src/findPeakElement");

test("Finds a peak element", () => {
    expect(findPeakElement([1, 3, 20, 4, 1, 0])).toBe(2); // 20 is a peak
    expect(findPeakElement([10, 20, 30, 40, 50])).toBe(4); // 50 is a peak
});
