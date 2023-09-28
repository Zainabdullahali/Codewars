function makeNegative(num) {
  if (num === 0) {
    return 0;
  }
  if (num > 0) {
    return -Math.abs(num);
  } else {
    return num;
  }
}
