const discrete = require("../src/discrete");

test("Find peak in a unimodal array", () => {
  const arr = [1, 3, 7, 12, 14, 13, 8, 4];
  expect(discrete(arr, 0, arr.length - 1)).toBe(4); // Peak at index 4 (14)
});

test("Find peak in a unimodal array with duplicates", () => {
  const arr = [1, 3, 7, 12, 14, 14, 13, 8, 4];
  // Both index 4 and 5 are valid peaks since they are equal; we expect the algorithm to return one of them.
  const result = discrete(arr, 0, arr.length - 1);
  expect(result === 4 || result === 5).toBe(true);
});

test("Find peak when peak is at start", () => {
  const arr = [10, 9, 8, 7, 6, 5];
  expect(discrete(arr, 0, arr.length - 1)).toBe(0); // Peak at index 0 (10)
});

test("Find peak when peak is at end", () => {
  const arr = [1, 2, 3, 4, 5, 6, 10];
  expect(discrete(arr, 0, arr.length - 1)).toBe(6); // Peak at index 6 (10)
});
