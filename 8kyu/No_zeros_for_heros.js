function noBoringZeros(n) {
  if (n === 0) {
    return n;
  }
  let numberString = String(n);

  for (let i = numberString.length - 1; i >= 0; i--) {
    if (+numberString[i] > 0) {
      break;
    }
    if (numberString[i] == "0") {
      numberString = numberString.slice(0, -1);
    }
  }
  return Number(numberString);
}
