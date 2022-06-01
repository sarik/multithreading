let A = [2, 3, 5, 7, 11];
let B = 12;
let dp = [...Array(A.length + 1)].map(() => [...Array(B + 1)].map(() => -1));
let mod = Math.pow(10, 6) + 7;

let c;
let i = 3;
console.log(2);
for (let count = 2; count <= 7; i++) {
  // iteration to check c is prime or not
  for (c = 2; c < i; c++) {
    if (i % c == 0) break;
  }

  if (c == i) {
    // c is prime
    console.log(i);
    count++; // increment the count of prime numbers
  }
}

for (let i = 0; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    //no sum(B)
    if (j === 0) dp[i][j] = 0;
    //no coins(no prime no)
    else if (i == 0) dp[i][j] = Number.MAX_VALUE;
    //if required sum greater than coin value of new element
    else if (j >= A[i - 1]) {
      //take the coin(decrease required sum,and take coin again) or not take the coin(get required sum for i-1 coins)
      //dp[i][j] = (dp[i - 1][j] + dp[i][j - A[i - 1]]) % mod;
      dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - A[i - 1]]);
    } else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp);
console.log(dp[dp.length - 1][dp[0].length - 1]);
