let C = 4;
let A = new Array(C);

for (let i = 0; i < A.length; i++) {
  A[i] = new Array(A.length).fill(".");
}

//console.log(A);

//let row = new Array(A.length).fill(".");
let leftDia = new Array(2 * A.length).fill(false);
let rightDia = new Array(2 * A.length).fill(false);

function check(A, row, col, leftDia, rightDia) {
  let n = A.length;

  //let queensInLeftDiagonal = 0;

  if (leftDia[row - col + n]) return false;
  if (rightDia[row + col]) return false;

  let queensInSameRow = 0;

  //going over colmun
  for (let i = 0; i <= n; i++) {
    //checking in my row if I have clashed with someone
    if (A[row][i] === "Q") {
      queensInSameRow++;
    }
  }
  if (queensInSameRow >= 2) return false;
  return true;
}

function convert2DArrayToAns(A) {
  let finalAns = [];
  let currLineAns = "";
  for (let i = 0; i < A.length; i++) {
    currLineAns = "";
    for (let j = 0; j < A.length; j++) {
      currLineAns += A[i][j];
    }
    finalAns.push(currLineAns);
  }

  return finalAns;
}
//console.log(A);
let ans = [];
function canPutQueen(A, n, col) {
  if (col === n) {
    //console.log("first", [...A].map());
    console.log("first", convert2DArrayToAns(A));

    ans.push(convert2DArrayToAns(A));
    //return true
    return;
  }

  for (let row = 0; row < n; row++) {
    A[row][col] = "Q";
    //if (row === col) {
    //leftDia[row - col + n] = true;
    //}
    //if (col + row === n - 1) {
    //rightDia[row + col] = true;
    //}

    console.log(col, A);
    if (check(A, row, col, leftDia, rightDia)) {
      leftDia[row - col + n] = true;
      rightDia[row + col] = true;
      canPutQueen(A, n, col + 1);
    }
    leftDia[row - col + n] = false;
    rightDia[row + col] = false;
    A[row][col] = ".";
    //leftDia[row - col + n] = false;
    //rightDia[row + col] = false;
  }
}

canPutQueen(A, A.length, 0);

console.log(ans);
