const range = {min: 0, max: 1000000};
const n = Math.round(Math.random() * range.max);

function linearSearch() {
  let amountOfIterationsToFind = 0;
  for (let i = range.min; i < range.max; i++) {
    amountOfIterationsToFind++;
    if (i === n) {
      break;
    }
  }

  showResult(amountOfIterationsToFind);
}

function showResult(amount) {
  console.log(`The algorithm found the value on ${amount} iteration`);
  console.log(`The complexity of the algorithm is [ O(n) ], linear algorithm`)
}

linearSearch();