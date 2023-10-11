function distinctDigitYear(year) {
  while (true) {
    year++;
    if (new Set(year.toString()).size === 4) {
      return year;
    }
  }
}
