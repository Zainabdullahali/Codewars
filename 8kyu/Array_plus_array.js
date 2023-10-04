function arrayPlusArray(arr1, arr2) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumA += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sumB += arr2[i];
  }
  return sumA + sumB;
}
