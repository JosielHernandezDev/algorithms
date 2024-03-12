const findTriangleType = require(".");

describe("findTriangleType", () => {

  it("should return 'This is a Obtuse Triangle' for input (17, 13, 23)", () => {
    const testInput = [17, 13, 23];
    expect(findTriangleType(...testInput)).toBe("This is an Obtuse Triangle");
  });

  it("should return 'This is a Right Triangle' for input (80, 84, 116)", () => {
    const testInput = [80, 84, 116];
    expect(findTriangleType(...testInput)).toBe("This is a Right Triangle");
  });

  it("should return 'This is a Right Triangle' for input (5, 12, 13)", () => {
    const testInput = [5, 12, 13];
    expect(findTriangleType(...testInput)).toBe("This is a Right Triangle");
  });

  it("should return 'This is an Acute Triangle' for input (5, 5, 5)", () => {
    const testInput = [5, 5, 5];
    expect(findTriangleType(...testInput)).toBe("This is an Acute Triangle");
  });

  it("should return 'This is an Acute Triangle' for input (45, 55, 70)", () => {
    const testInput = [45, 55, 70];
    expect(findTriangleType(...testInput)).toBe("This is an Acute Triangle");
  });
});
