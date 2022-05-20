let A = [400, 500, 300, 800, 100, 900];

/*function allSubseq(A, i, currArr) {
  if (i === A.length) {
    return;
  }

  console.log(currArr);

  currArr.push(A[i]);
  allSubseq(A, i + 1, currArr);

  currArr.pop();
  allSubseq(A, i + 1, currArr);
}

allSubseq(A, 0, []);*/

A = A.sort((a, b) => a - b);

let ans = [];

function genSeq(i, n, curr) {
  console.log(curr);
  if (i === n) {
    return;
  }

  for (let j = i; j < n; j++) {
    genSeq(j + 1, n, [...curr, A[j]]);
  }
}

genSeq(0, A.length, []);
console.log(ans);
