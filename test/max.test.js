const max = require("../src/max");

test("Find maximum of a function", () => {
    const func = x => -1 * (x - 3) ** 2 + 10;
    expect(max(func, 0, 10)).toBeCloseTo(3, 5);
});
