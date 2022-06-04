function allNumbers(i, curr, n) {
  if (i === n) {
    console.log(curr);
    return;
  }

  allNumbers(i + 1, curr + "1", n);
  allNumbers(i + 1, curr + "2", n);
}

allNumbers(0, "", 3);
