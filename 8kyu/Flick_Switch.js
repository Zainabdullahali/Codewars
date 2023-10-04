function flickSwitch(list1) {
  let flicked = false;
  const result = [];
  for (const item of list1) {
    if (item === "flick") {
      flicked = !flicked;
    }
    result.push(!flicked);
  }
  return result;
}
