const array = require("../src/array");

test("Find target in a sorted array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(array(arr, 5)).toBe(4);
    expect(array(arr, 10)).toBe(-1);
});

test("Find target in a rotated sorted array", () => {
    const arr = [6, 7, 8, 1, 2, 3, 4, 5];
    expect(array(arr, 3)).toBe(5);
    expect(array(arr, 9)).toBe(-1);
});

test("Find target in a rotated sorted array with duplicates", () => {
    const arr = [6, 7, 8, 1, 2, 3, 4, 5, 6];
    expect(array(arr, 3)).toBe(-1);
    expect(array(arr, 9)).toBe(-1);
});

