function whoIsPaying(name) {
  let arr = [];
  if (name.length > 2) {
    arr.push(name);
    const firstTwoChars = name.slice(0, 2);
    arr.push(firstTwoChars);
    return arr;
  } else {
    const array = name.split(" ");
    return array;
  }
}
