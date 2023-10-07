function shortcut(string) {
  if (string === string.toUpperCase()) {
    return string;
  }
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}
