let A = [6, 6, 3, 3, 6, 5];

let map = new Map();

//subarray solution
/*A = A.sort((a, b) => a - b);

console.log(A);

let ans = [[]];
function getSubsets(A, n, i, curr) {
  if (curr.length !== 0) {
    if (!map.has([...curr].join("_"))) {
      map.set([...curr].join("_"), 1);
      ans.push([...curr]);
    }
  }
  if (i === n) {
    return;
  }

  //for (let j = i; j < n; j++) {
  curr.push(A[i]);
  getSubsets(A, n, i + 1, curr);
  curr.pop();
  //}
}

//this gives subarray
for (let j = 0; j < A.length; j++) getSubsets(A, A.length, j, []);*/

A = A.sort((a, b) => a - b);

let ans = [];

//Subset solution
function genSeq(i, n, arr) {
  if (!map.has([...arr].join("_"))) {
    map.set([...arr].join("_"), 1);
    ans.push([...arr]);
  }
  //ans.push(arr);
  if (i === n) {
    //ans.push(arr)
    //sortLastTwo(ans)
    return;
  }

  //pivot each element once and keep going deep
  //when an element is pivot,subset starts from that only
  for (let j = i; j < n; j++) {
    genSeq(j + 1, n, [...arr, A[j]]);
  }
}

genSeq(0, A.length, []);

console.log(ans);
