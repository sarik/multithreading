function sumToZero(n, currSum) {
  if (n <= 0) {
    return currSum;
  } else {
    return sumToZero(n - 1, currSum + n);
  }
}

console.log(sumToZero(3, 0));
