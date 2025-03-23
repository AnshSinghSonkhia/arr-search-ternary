const rotatedArray = require("../src/rotatedArray");

test("Find target in a rotated sorted array", () => {
    const arr = [6, 7, 8, 1, 2, 3, 4, 5];
    expect(rotatedArray(arr, 3)).toBe(5);
    expect(rotatedArray(arr, 9)).toBe(-1);
});
