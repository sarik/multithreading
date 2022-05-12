let A = [400, 500, 300, 800, 100, 900];

function sum(arr) {
  return arr.reduce((a, curr) => a + curr, 0);
}

function allSubseq(A, i, B, currArr) {
  if (currArr.length === B) {
    if (sum(currArr) <= 1000) console.log(currArr);
    return;
  }
  if (i === A.length) {
    return;
  }

  currArr.push(A[i]);
  allSubseq(A, i + 1, B, currArr);
  currArr.pop(A[i]);
  allSubseq(A, i + 1, B, currArr);
}

allSubseq(A, 0, 3, []);
