let A = [
  96, -71, 18, 66, -39, -32, -16, -83, -11, -92, 55, 66, 93, 5, 50, -45, 66,
  -28, 69, -4, -34, -87, -32, 7, -53, 33, -12, -94, -80, -71, 48, -93, 62,
];
A = [1, -1];
for (let i = 0; i < A.length; i++) {
  //if (A[i] === 0) return 1;
}

let prefix_sum = [A[0]];

for (let i = 1; i < A.length; i++) {
  prefix_sum[i] = prefix_sum[i - 1] + A[i];
}

//need to see if difference of 2 prefix_sums make up zero,or there is a prefix_sum with 0(that subarray will start from 0), then there is a subarray with zero sum

prefix_sum = prefix_sum.sort((a, b) => a - b);
console.log(prefix_sum);
for (let i = 0; i < prefix_sum.length; i++) {
  if (prefix_sum[i] === 0) {
    console.log("zero");
    break;
  } else if (i !== 0 && prefix_sum[i] === prefix_sum[i - 1]) {
    console.log("zero");
    break;
  }
}

console.log("not zero");
