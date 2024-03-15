const NumberToEnglish = require(".");

describe("NumberToEnglish", () => {
  it('should return "seven" when given 7', () => {
    expect(NumberToEnglish(7)).toBe("seven");
  });

  it('should return "five hundred seventy-five" when given 575', () => {
    expect(NumberToEnglish(575)).toBe("five hundred seventy-five");
  });

  it('should return "one hundred" when given 100', () => {
    expect(NumberToEnglish(100)).toBe("one hundred");
  });

  it('should return "one hundred twenty-three" when given 123', () => {
    expect(NumberToEnglish(123)).toBe("one hundred twenty-three");
  });

  it('should return "seventy-eight million one hundred ninety-three thousand five hundred twelve" when given 78193512', () => {
    expect(NumberToEnglish(78193512)).toBe("seventy-eight million one hundred ninety-three thousand five hundred twelve");
  });
});
