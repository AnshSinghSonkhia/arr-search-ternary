const search2D = require("../src/search2D");

test("Finds minimum in a 2D function", () => {
    const func = (x, y) => (x - 3) ** 2 + (y - 4) ** 2; // Minimum at (3,4)
    const [minX, minY] = search2D(func, 0, 10, 0, 10);
    expect(minX).toBeCloseTo(3, 5);
    expect(minY).toBeCloseTo(4, 5);
});