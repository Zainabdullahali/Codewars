function countSumOfTwoRepresentations(n, l, r) {
  let count = 0;
  for (let A = l; A <= r; A++) {
    let B = n - A;
    if (B >= A && B <= r) {
      count++;
    }
  }
  return count;
}
