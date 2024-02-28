const sortInputString = require(".");

describe("index", () => {
  it("should return throw error if not is string", () => {
    const inputString = undefined;
    const fn = () => sortInputString(inputString);
    
    expect(fn).toThrowError("Input must be a string");
  });

  it("should return throw error if string is empty", () => {
    const inputString = "";
    const fn = () => sortInputString(inputString);

    expect(fn).toThrowError("Input string must not be empty");
  });

  it("should return sorted string", () => {
    const inputString = "P@rAAngar11024859cu÷iRImîçūąřoʻ";
    const result = sortInputString(inputString);

    expect(result).toBe("urronmigcaRPIAA11590248@÷îçūąřʻ");
  });

  it("should return sorted string with Odd numbers before Even numbers", () => {
    const inputString = "35976189647";
    const result = sortInputString(inputString);

    expect(result).toBe("35971976864");
  });

  it("should ends with special characters", () => {
    const inputString = "rAAngar11024859cu÷iRImîçūąřoʻ";
    const regExpLetters = /[a-zA-Z]/;
    const regExpNumbers = /[0-9]/;

    const result = sortInputString(inputString);

    const specialCharacters = result.split("").filter(
      (char) => !regExpLetters.test(char) && !regExpNumbers.test(char)
    ).join("");

    expect(result.endsWith(specialCharacters)).toBe(true);
  });
  
});
