function excludingVatPrice(price) {
  if (price === null) {
    return -1;
  }
  const originalPrice = +(price / 1.15).toFixed(2);
  return originalPrice;
}
