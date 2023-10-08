function bmi(weight, height) {
  const totalBmi = weight / (height * height);
  if (totalBmi <= 18.5) {
    return "Underweight";
  } else if (totalBmi <= 25.0) {
    return "Normal";
  } else if (totalBmi <= 30.0) {
    return "Overweight";
  } else if (totalBmi > 30) {
    return "Obese";
  }
}
