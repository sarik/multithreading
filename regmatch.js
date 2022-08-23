let A = "cc";
let B = "?";
let dpp = new Array(A.length + 1);
for (let i = 0; i < dpp.length; i++) {
  dpp[i] = new Array(B.length + 1).fill(false);
}

dpp[0][0] = true;

console.log(dpp);

// let isNotAst = false
let isNotAstIndex = -1;

for (let j = 0; j <= B.length; j++) {
  if (B[j] !== "*") {
    isNotAstIndex = j;
    break;
  }
}

if (isNotAstIndex !== -1) {
  for (let j = 0; j <= isNotAstIndex; j++) {
    dpp[0][j] = true;
  }
}
console.log(dpp);
for (let i = 0; i < dpp.length; i++) {
  for (let j = 0; j < dpp[0].length; j++) {
    if (i === 0 || j === 0) {
      //dpp[i][j] = true;
      continue;
    }


    if (A[i - 1] === B[j - 1]) {
      console.log(i, j, "first");
      dpp[i][j] = dpp[i - 1][j - 1];
    } else if (B[j - 1] === "?") {
      console.log(i, j, "second");
      dpp[i][j] = dpp[i - 1][j - 1];
    } else if (B[j - 1] === "*") {
      dpp[i][j] = dpp[i][j - 1] || dpp[i - 1][j];
    } else {
      console.log(i, j, "third");
      dpp[i][j] = false;
    }
  }
}

console.log(dpp);
console.log(dpp[A.length][B.length] ? 1 : 0);
