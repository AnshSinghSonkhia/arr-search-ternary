const min = require("../src/min");

test("Find minimum of a function", () => {
    const func = x => (x - 3) ** 2;
    expect(min(func, 0, 10)).toBeCloseTo(3, 5);
});
