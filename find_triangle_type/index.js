function findTriangleType(leg1, leg2, hypo) {
  const hypotenuse = hypo * hypo;
  const sumOfLegs = leg1 * leg1 + leg2 * leg2;

  if (hypotenuse === sumOfLegs) {
    return "This is a Right Triangle";
  } else if (hypotenuse < sumOfLegs) {
    return "This is an Acute Triangle";
  }

  return "This is an Obtuse Triangle";
  
}

console.log(findTriangleType(17, 13, 23)); // This is a Obtuse Triangle
module.exports = findTriangleType;
