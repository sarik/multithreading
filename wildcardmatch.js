let a = "abc";
let b = "ab*";

let dp = new Array(a.length + 1);

for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(b.length + 1).fill(-1);
}

console.log(dp);

dp[0][0] = 1;
let allAsterix = 1;

for (let i = 1; i <= b.length; i++) {
  if (b[i - 1] !== "*") {
    allAsterix = 0;
  }
  dp[0][i] = allAsterix;
}

for (let i = 1; i <= a.length; i++) {
  dp[i][0] = 0;
}

console.log(dp);
for (let i = 0; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    if (dp[i][j] !== -1) {
      continue;
    }
    if (a[i - 1] !== b[j - 1] && b[j-1]!=="*") {
      dp[i][j] = 0;
    } else if (b[j - 1] === "*") {
      dp[i][j] = dp[i][j - 1] === 1 || dp[i - 1][j] === 1 ? 1 : 0;
    } else if (a[i - 1] === b[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1];
    }
  }
}

console.log(dp);
console.log(dp[a.length][b.length]);
