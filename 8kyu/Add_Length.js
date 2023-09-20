function addLength(str) {
  const words = str.split(" ");
  const result = [];
  for (const word of words) {
    result.push(`${word} ${word.length}`);
  }
  return result;
}
