function drawStairs(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    if (i == n - 1) {
      string += "I";
    } else {
      string += "I\n";
    }
  }
  return string;
}
