function doubleChar(str) {
  let doubledChar = "";
  for (let i = 0; i < str.length; i++) {
    doubledChar = doubledChar + str[i] + str[i];
  }
  return doubledChar;
}
