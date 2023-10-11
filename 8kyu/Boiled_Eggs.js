function cookingTime(eggs) {
  const eggsPerBatch = 8;
  const boilTime = 5;
  const batches = Math.ceil(eggs / eggsPerBatch);
  const totalTime = batches * boilTime;
  return totalTime;
}
