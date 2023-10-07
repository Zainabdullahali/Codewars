function smash(words) {
  let result = words.toString();
  for (let i = 0; i < result.length; i++) {
    if (result[i] === ",") {
      result = result.replace(",", " ");
    }
  }
  return result;
}
