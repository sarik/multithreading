let A = [
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3],
];
let sortedA = A.sort((a, b) => a[0] - b[0]);

let subSeq = sortedA.map((val) => val[0]);
let subSeqWidth = sortedA.map((val) => val[1]);

let dp = Array(A.length);

/*for (let i = 0; i < dp.length; i++) {
  dp = new Array(A.length);
}*/

dp[0] = 1;

for (let i = 1; i < dp.length; i++) {
  let maxFromLast = 0;
  for (let j = 0; j < i; j++) {
    if (subSeq[j] < subSeq[i] && subSeqWidth[j] < subSeqWidth[i]) {
      console.log(subSeq[j], "first", subSeq[i]);
      maxFromLast = Math.max(maxFromLast, dp[j]);
    }
  }

  dp[i] = 1 + maxFromLast;
}

console.log(subSeq);
console.log(dp);
