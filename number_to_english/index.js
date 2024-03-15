const numbersTranslations = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const sectionsRanges = [
  { name: "twenty-", range: [20, 29] },
  { name: "thirty-", range: [30, 39] },
  { name: "forty-", range: [40, 49] },
  { name: "fifty-", range: [50, 59] },
  { name: "sixty-", range: [60, 69] },
  { name: "seventy-", range: [70, 79] },
  { name: "eighty-", range: [80, 89] },
  { name: "ninety-", range: [90, 99] },
  { name: "hundred", range: [100, 999] },
];

function translateSection(numberToTranslate, section) {
  const sectionName = section.name;
  const sectionRange = section.range;
  const sectionValue = Math.floor(numberToTranslate / sectionRange[0]);
  const sectionRemainder = numberToTranslate % sectionRange[0];
  const sectionValueInEnglish =
    sectionValue >= 1 && sectionRange[0] >= 99
      ? NumberToEnglish(sectionValue)
      : null;

  const sectionRemainderInEnglish =
    sectionRemainder >=1 ? NumberToEnglish(sectionRemainder) : null;

  const sectionNameInEnglish = sectionName;

//   console.log("values", {
//     sectionName,
//     sectionRange,
//     sectionValue,
//     sectionRemainder,
//     sectionValueInEnglish,
//     sectionRemainderInEnglish,
//   });

  return `${sectionValueInEnglish ? sectionValueInEnglish : ""} ${
    sectionNameInEnglish && sectionNameInEnglish
  } ${sectionRemainderInEnglish ? `${sectionRemainderInEnglish}` : ""}`.trim().replace("- ", "-");
}

function NumberToEnglish(numberToTranslate1) {
  const numberToTranslate = parseInt(numberToTranslate1);

  if (numberToTranslate <= 19) {
    return numbersTranslations[numberToTranslate];
  }

  if (numberToTranslate <= 99999) {
    for (let i = 0; i < sectionsRanges.length; i++) {
      const section = sectionsRanges[i];
      if (
        numberToTranslate >= section.range[0] &&
        numberToTranslate <= section.range[1]
      ) {
        return translateSection(numberToTranslate, section);
      }
    }
  }
  else if (numberToTranslate <= 999999) {
    return NumberToEnglish(numberToTranslate / 1000) + " thousand " + NumberToEnglish(numberToTranslate % 1000); 
  } else if (numberToTranslate <= 999999999){
    return NumberToEnglish(numberToTranslate / 1000000)  + " million " + NumberToEnglish(numberToTranslate % 1000000);
  } else {
    return "Number is too big, I can't translate it. XD";
  }
}

console.log(NumberToEnglish(78193512));

module.exports = NumberToEnglish;
