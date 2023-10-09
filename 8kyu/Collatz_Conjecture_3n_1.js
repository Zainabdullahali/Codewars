var hotpo = function (n) {
  if (n == 1) return 0;
  let count = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      count++;
    } else {
      n = n * 3 + 1;
      count++;
    }
  }
  return count;
};
