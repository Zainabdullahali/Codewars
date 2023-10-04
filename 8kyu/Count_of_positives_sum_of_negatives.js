function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  if (input === null || input.length === 0) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else {
      sum = sum + input[i];
    }
  }
  let arr = [];
  arr.push(count);
  arr.push(sum);
  return arr;
}
