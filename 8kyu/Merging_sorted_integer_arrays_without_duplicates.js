function mergeArrays(a, b) {
  let mergeArr = [...new Set([...a, ...b])];
  mergeArr.sort((a, b) => a - b);
  return mergeArr;
}
