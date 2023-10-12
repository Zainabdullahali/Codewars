function oddOnesOut(nums) {
  let counts = {};
  for (let num of nums) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }
  let result = nums.filter((num) => counts[num] % 2 === 0);
  return result;
}
