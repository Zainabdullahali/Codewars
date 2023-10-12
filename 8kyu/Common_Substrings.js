function SubstringTest(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  for (let i = 0; i < lowerStr1.length - 1; i++) {
    for (let j = 2; j <= lowerStr1.length - i; j++) {
      const substring = lowerStr1.slice(i, i + j);
      if (lowerStr2.includes(substring)) {
        return true;
      }
    }
  }
  return false;
}
