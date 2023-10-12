function spinAround(turns) {
  let countLeft = 0;
  let countRight = 0;
  for (let i = 0; i < turns.length; i++) {
    if (turns[i] === "left") {
      countLeft++;
    } else {
      countRight++;
    }
  }
  let totalCount;
  if (countLeft >= countRight) {
    totalCount = countLeft - countRight;
  } else {
    totalCount = countRight - countLeft;
  }
  let result = Math.floor(totalCount / 4);
  return result;
}
