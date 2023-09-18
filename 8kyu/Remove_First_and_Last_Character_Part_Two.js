function array(arr) {
  arr = arr.split(",");

  if (arr.length < 3) {
    return null;
  }

  return arr.slice(1, arr.length - 1).join(" ");
}
