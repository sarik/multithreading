let A = [400, 500, 300, 800, 100, 900];
//A = A.sort((a, b) => a - b);

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

/*console.log(A);

function genSeq2(arr, i, curr) {
  console.log(curr);
  if (i === arr.length) {
    return;
  }

  for (let j = i; j < arr.length; j++) {
    genSeq(arr, j + 1, [...curr, A[j]]);
  }
}

genSeq2(A, 0, []);*/
