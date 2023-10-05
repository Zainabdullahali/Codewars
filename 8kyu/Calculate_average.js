function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array[i] + sum;
    count++;
  }
  return sum / count;
}
