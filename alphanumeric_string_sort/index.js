const inputString = "rAAngar11024859cu÷iRImîçūąřoʻ";

const regExpLetters = /[a-zA-Z]/;
const regExpNumbers = /[0-9]/;

function sortInputString(inputString) {
  if (typeof inputString !== "string")
    throw new Error("Input must be a string");
  if (inputString.length === 0)
    throw new Error("Input string must not be empty");

  const inputStringArray = inputString.split("");

  const specialCharacters = inputStringArray.filter(
    (char) => !regExpLetters.test(char) && !regExpNumbers.test(char)
  );

  const letters = inputStringArray
    .filter((char) => regExpLetters.test(char))
    .sort()
    .reverse();

  //without ASC and DESC
  const numbers = inputStringArray
    .filter((char) => regExpNumbers.test(char))
    .sort((a, b) => (b % 2) - (a % 2));
  //with ASC and DESC
  // const numbers = inputStringArray.filter((char) => regExpNumbers.test(char)).sort((a,b)=> a % 2 - b % 2 || a - b );
  return [...letters, ...numbers, ...specialCharacters].join("");
}

console.log(sortInputString(inputString));

module.exports = sortInputString;
