const validParenthesesCount = require(".");

describe("index", () => {
  it("should return 'Valid' for input '()'", () => {
    const testInput = "()";
    expect(validParenthesesCount(testInput)).toBe("Valid");
  });

  it("should return 'Valid' for input '(hello, world)'", () => {
    const testInput = "(hello, world)";
    expect(validParenthesesCount(testInput)).toBe("Valid");
  });

  it("should return 'Valid' for input 'Random text (as this) is ok().'", () => {
    const testInput = "Random text (as this) is ok().";
    expect(validParenthesesCount(testInput)).toBe("Valid");
  });

  it("should return 'Invalid' for input ')('", () => {
    const testInput = ")(";
    expect(validParenthesesCount(testInput)).toBe("Invalid");
  });

  it("should return 'Valid' for input '(Hello (,) world (!))'", () => {
    const testInput = "(Hello (,) world (!))";
    expect(validParenthesesCount(testInput)).toBe("Valid");
  });

  it("should return 'Invalid' for input ')()('", () => {
    const testInput = ")()(";
    expect(validParenthesesCount(testInput)).toBe("Invalid");
  });

  it("should return 'Invalid' for input '())(()'", () => {
    const testInput = "())(()";
    expect(validParenthesesCount(testInput)).toBe("Invalid");
  });
});
