function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum = classPoints[i] + sum;
  }
  const average = sum / classPoints.length;
  return average <= yourPoints;
}
