let A = [400, 500, 300, 800, 100, 900];

function sum(arr) {
  return arr.reduce((a, curr) => a + curr, 0);
}

/*function allSubseq(A, i, B, currArr) {
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
}*/

function allSubseq(A, i, sum, size, curr) {
  if (sum > 1000) return;
  if (size === 0 && sum <= 1000) {
    console.log("found", curr);
    return;
  }
  if (i === A.length) {
    return;
  }
  //take element in sum
  curr.push(A[i]);
  allSubseq(A, i + 1, sum + A[i], size - 1, curr);
  //dont take element in sum
  curr.pop();
  allSubseq(A, i + 1, sum + 0, size, curr);
}

allSubseq(A, 0, 0, 3, []);
