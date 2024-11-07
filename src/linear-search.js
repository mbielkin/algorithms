import { range, generateN, showResult } from "./config.js";

function linearSearch() {
  const n = generateN();

  let amountOfIterationsToFind = 0;
  for (let i = range.min; i < range.max; i++) {
    amountOfIterationsToFind++;
    if (i === n) {
      break;
    }
  }

  showResult(amountOfIterationsToFind, "O(n) - linear algorithm");
}

linearSearch();
