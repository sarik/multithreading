let A = [2, 4, 3, 4, 5, 3];
A = A.sort((a, b) => a - b);

let ans = 0;

for (let i = 1; i < A.length; i++) {
  if (A[i] === A[i - 1]) {
    A[i]++;
    ans++;
  }
  if (A[i] < A[i - 1]) {
    //if 6 4 ,should become 6 7
    let countToGetOneGreaterThanPrev = A[i - 1] - A[i] + 1;
    ans += countToGetOneGreaterThanPrev;
    A[i] = A[i - 1] + 1;
  }
  /*  while (A[i] <= A[i - 1]) {
         A[i]++
         ans++
     } */
}

console.log(ans);
