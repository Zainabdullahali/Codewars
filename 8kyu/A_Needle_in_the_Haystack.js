function findNeedle(haystack) {
  let count = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== "needle") {
      count++;
    } else {
      break;
    }
  }
  return `found the needle at position ${count}`;
}
