function pipeFix(numbers) {
  const newNumber = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    newNumber.push(i);
  }
  return newNumber;
}
