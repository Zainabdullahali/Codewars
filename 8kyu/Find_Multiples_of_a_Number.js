function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i = i + integer) {
    result.push(i);
  }
  return result;
}
