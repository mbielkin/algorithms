export const range = {min: 0, max: 1000000};

export function generateN() {
  return Math.round(Math.random() * range.max);
}

export function showResult(amount, complexity) {
  console.log(`The algorithm found the value on ${amount} iteration`);
  console.log(`The complexity of the algorithm is ${complexity}`);
}