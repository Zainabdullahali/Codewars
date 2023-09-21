function mango(quantity, price) {
  const fullPriceMangoes = Math.floor(quantity / 3) * 2;
  const remainingMangoes = quantity % 3;
  const totalCost = (fullPriceMangoes + remainingMangoes) * price;
  return totalCost;
}
