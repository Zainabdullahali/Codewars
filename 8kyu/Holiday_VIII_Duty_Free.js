function dutyFree(normPrice, discount, hol) {
  const savingPerBottle = (discount / 100) * normPrice;
  const bottlesNeeded = hol / savingPerBottle;
  return Math.trunc(bottlesNeeded);
}
