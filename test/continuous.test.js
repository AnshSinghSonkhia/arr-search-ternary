const continuous = require("../src/continuous");

test("Finds peak in a continuous function", () => {
    const func = x => -1 * (x - 3) ** 2 + 9; // Peak at x = 3
    const result = continuous(func, 0, 10);
    expect(result).toBeCloseTo(3, 5);
});
