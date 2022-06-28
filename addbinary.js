let A = "100";

let B = "11";
A = "1010110111001101101000";
B = "1000011011000000111100110";
let carry = 0;
let ans = "";

let isBMin = A.length - B.length;

if (isBMin > 0) {
  //A is greater
  for (let i = 0; i < isBMin; i++) {
    B = "0" + B;
  }
} else if (isBMin < 0) {
  console.log("first", isBMin);
  for (let i = 0; i < Math.abs(isBMin); i++) {
    A = "0" + A;
  }
}

let i = A.length;
let j = B.length;

console.log(A);
console.log(B);

while (i >= 0) {
  if (Number(A[i]) + Number(B[j]) + carry === 2) {
    ans += "0";
    carry = 1;
  } else if (Number(A[i]) + Number(B[j]) + carry === 3) {
    ans += "1";
    carry = 1;
  } else if (Number(A[i]) + Number(B[j]) + carry === 1) {
    ans += "1";
    carry = 0;
  } else if (Number(A[i]) + Number(B[j]) + carry === 0) {
    ans += "0";
    carry = 0;
  }

  i--;
  j--;
}

/*while (i >= 0) {
  if (Number(A[i]) + carry === 2) {
    ans += "0";
    carry = 1;
  } else if (Number(A[i]) + carry === 3) {
    ans += "1";
    carry = 1;
  } else if (Number(A[i]) + carry === 1) {
    ans += "1";
    carry = 0;
  } else if (Number(A[i]) + carry === 0) {
    ans += "0";
    carry = 0;
  }
  i--;
}
while (j > 0) {
  if (Number(B[j]) + carry === 2) {
    ans += "0";
    carry = 1;
  } else if (Number(B[j]) + carry === 3) {
    ans += "1";
    carry = 1;
  } else if (Number(B[j]) + carry === 1) {
    ans += "1";
    carry = 0;
  } else if (Number(B[j]) + carry === 0) {
    ans += "0";
    carry = 0;
  }
  j--;
}
*/
if (carry === 1) ans += "1";

ans = ans.split("").reverse().join("");
console.log(ans);

/*1000011011000000111100110;
1010110111001101101000;
011100101010111100011100;

1001110001111010101001110;*/
