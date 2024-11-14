import { range, generateN, showResult } from "./config.js";

function binarySearch() {
  const n = generateN();

  let amountOfIterationsToFind = 0;

  let min = range.min;
  let max = range.max;

  while(min < max) {
    amountOfIterationsToFind++;
    const midValue = Math.floor((min + max) / 2);
    if (n < midValue) {
      max = midValue;
      continue;
    } else if (n > midValue) {
      min = midValue;
      continue;
    }
    break;
  }
  

  showResult(amountOfIterationsToFind, "O(log2n) - binary algorithm");
}

binarySearch();