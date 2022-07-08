let A = [686, 675, 758, 659, 377, 965, 430, 220, 599, 699];
let mod = Math.pow(10, 9) + 7;

let n = A.size;

//let map = new Map()
let freq = new Array(1001).fill(0);

for (let i = 0; i < A.length; i++) {
  freq[A[i]]++;
}

console.log(freq.filter((val) => val !== 0));

let ans = 0;

for (let i = 1; i <= 1000; i++) {
  for (let j = 1; j <= 1000; j++) {
    let val = i % j;
    let temp = freq[i] * freq[j] * val;
    ans = ((ans % mod) + (temp % mod)) % mod;
  }
}
