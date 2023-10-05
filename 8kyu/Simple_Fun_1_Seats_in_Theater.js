function seatsInTheater(nCols, nRows, col, row) {
  let disturbCols = nCols - (col - 1);
  let disturbRows = nRows - row;
  return disturbCols * disturbRows;
}
