let A = [1, 3, 5];
let unsetBitCountsForAPos = [];
let setBitCountsForAPos = [];

for (let i = 0; i <= 31; i++) {
  let setBits = 0;
  let unsetBits = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[j] & Math.pow(2, i)) {
      setBits++;
    } else {
      unsetBits++;
    }
  }
  unsetBitCountsForAPos.push(unsetBits);
  setBitCountsForAPos.push(setBits);
}

console.log(unsetBitCountsForAPos);
console.log(setBitCountsForAPos);

let ans = 0;

for (let i = 0; i < 31; i++) {
  ans += unsetBitCountsForAPos[i] * setBitCountsForAPos[i];
}

//2 times since (i,j) and (j,i) are separate pairs
console.log(ans * 2);
