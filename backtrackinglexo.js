let A = [1, 2, 3, 4, 5];

function generateAllLexPer(arr, i, n, curr, ans) {
  ans.push([...curr]);

  if (i === n) {
    return;
  }

  for (let j = i; j < n; j++) {
    curr.push(arr[j]);
    generateAllLexPer(arr, j + 1, n, curr, ans);
    curr.pop();
  }
}

let ans = [];
generateAllLexPer(A, 0, A.length, [], ans);

console.log(ans);
