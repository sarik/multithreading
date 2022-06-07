/*let A = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, -1],
];*/

let A = [
  [2, -1],
  [0, 0],
  [-1, 1],
];

function getPath(i, j, A, emptyCells, count, curr) {
  console.log(i, j);
  if (i >= A.length || i < 0) return 0;
  if (j >= A[0].length || j < 0) return 0;

  if (A[i][j] === -1) return 0;

  if (A[i][j] === 2) {
    console.log(curr);
    if (curr.length === emptyCells + 1) {
      return 1;
    }

    return 0;
  }

  //mark the point as visited
  A[i][j] = -1;
  let ans = 0;

  //visit down
  if (i + 1 >= 0 && i + 1 < A.length && j < A[0].length && j >= 0) {
    console.log("f1");
    let lefttemp = A[i + 1][j];
    ans += getPath(i + 1, j, A, emptyCells, ++count, [...curr, "down"]);
    //after done with down side, make sure to revert it back to unvisited
    A[i + 1][j] = lefttemp;
  }

  if (i - 1 >= 0 && i - 1 < A.length && j < A[0].length && j >= 0) {
    console.log("f2");
    let righttemp = A[i - 1][j];
    ans += getPath(i - 1, j, A, emptyCells, ++count, [...curr, "up"]);
    A[i - 1][j] = righttemp;
  }

  if (i >= 0 && i < A.length && j + 1 < A[0].length && j + 1 >= 0) {
    console.log("f3");
    let uptemp = A[i][j + 1];
    ans += getPath(i, j + 1, A, emptyCells, ++count, [...curr, "right"]);
    A[i][j + 1] = uptemp;
  }

  if (i >= 0 && i < A.length && j - 1 < A[0].length && j - 1 >= 0) {
    console.log("f4");
    let downtemp = A[i][j - 1];
    ans += getPath(i, j - 1, A, emptyCells, ++count, [...curr, "left"]);
    A[i][j - 1] = downtemp;
  }
  return ans;

  /*A[i][j] = -1;
  getPath(i + 1, j, A, emptyCells, count);
  A[i+1][j] = 0;
  getPath(i, j + 1, A, emptyCells, count);
  A[i][j] = 0;
  getPath(i, j + 1, A, emptyCells, count);
  A[i][j] = 0;
  getPath(i, j + 1, A, emptyCells, count);
  A[i][j] = 0;*/
}

let startingi = -1;
let startingj = -1;
let emptyCells = 0;

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A[0].length; j++) {
    if (A[i][j] === 1) {
      startingi = i;
      startingj = j;
    }
    if (A[i][j] === 0) {
      emptyCells++;
    }
  }
}

console.log("here", startingi, startingj);
console.log(getPath(startingi, startingj, A, emptyCells, 0, []));
