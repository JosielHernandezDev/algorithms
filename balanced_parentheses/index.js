const testInput = "())(()";

function validParenthesesCount(value) {
  const val = value.trim();
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] === "(") {
      count++;
    } else if (val[i] === ")") {
      count--;
    }
    if (count < 0) {
      return "Invalid";
    }
  }
  return count === 0 ? "Valid" : "Invalid";
}

console.log(validParenthesesCount(testInput));

module.exports = validParenthesesCount;
