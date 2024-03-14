function binarySearchCounter(numbers, numberToFind) {
  let start = 0;
  let end = numbers.length - 1;
  let counter = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (end < start) {
      return `Number not found`;
    } else {
      let mid = Math.floor((start + end) / 2);
      if (numbers[mid] === numberToFind) {
        return `Number found in index: ${mid}
            Total Number of keys examined: ${counter}`;
      } else if (numbers[mid] < numberToFind) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      counter++;
    }
  }

  return `Number not found`;
}

console.log(
  binarySearchCounter(
    [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98],
    48
  )
);
