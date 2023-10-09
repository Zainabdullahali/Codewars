function nameShuffler(str) {
  const names = str.split(" ");
  let temp = names[0];
  names[0] = names[names.length - 1];
  names[names.length - 1] = temp;
  const swappedName = names.join(" ");
  return swappedName;
}
