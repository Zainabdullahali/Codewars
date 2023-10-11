function rectangles(n, m) {
  const horizontal = (n * (n - 1)) / 2;
  const vertical = (m * (m - 1)) / 2;
  return horizontal * vertical;
}
