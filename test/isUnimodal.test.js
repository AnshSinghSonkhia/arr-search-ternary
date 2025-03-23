const isUnimodal = require("../src/isUnimodal");

test("Checks unimodal arrays", () => {
    expect(isUnimodal([1, 3, 5, 4, 2])).toBe(true);
    expect(isUnimodal([1, 2, 3, 4, 5])).toBe(false);
    expect(isUnimodal([5, 4, 3, 2, 1])).toBe(false);
});
