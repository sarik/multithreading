let A = [
  [4, 100],
  [48, 94],
  [16, 21],
  [58, 71],
  [36, 53],
  [49, 68],
  [18, 42],
  [37, 90],
  [68, 75],
  [6, 57],
  [25, 78],
  [58, 79],
  [18, 29],
  [69, 94],
  [5, 31],
  [10, 87],
  [21, 35],
  [1, 32],
  [7, 24],
  [17, 85],
  [30, 95],
  [5, 63],
  [1, 17],
  [67, 100],
  [53, 55],
  [30, 63],
  [7, 76],
  [33, 51],
  [62, 68],
  [78, 83],
  [12, 24],
  [31, 73],
  [64, 74],
  [33, 40],
  [51, 63],
  [17, 31],
  [14, 29],
  [9, 15],
  [39, 70],
  [13, 67],
  [27, 100],
  [10, 71],
  [18, 47],
  [48, 79],
  [70, 73],
  [44, 59],
  [68, 78],
  [24, 67],
  [32, 70],
  [29, 94],
  [45, 90],
  [10, 76],
  [12, 28],
  [31, 78],
  [9, 44],
  [29, 83],
  [21, 35],
  [46, 93],
  [66, 83],
  [21, 72],
  [29, 37],
  [6, 11],
  [56, 87],
  [10, 26],
  [11, 12],
  [15, 88],
  [3, 13],
  [56, 70],
  [40, 73],
  [25, 62],
  [63, 73],
  [47, 74],
  [8, 36],
];

A = [
  [92, 98],
  [10, 86],
  [61, 91],
  [8, 71],
  [53, 65],
  [19, 79],
  [20, 50],
];
A = A.sort((a, b) => a[0] - b[0]);

let C = [];
let i = 1;
let prev = A[i - 1];
let curr = [];
while (true) {
  console.log(prev, "comparing", A[i]);
  if (prev[1] >= A[i][0]) {
    curr = [prev[0], Math.max(prev[1], A[i][1])];
    prev = curr;
    if (i === A.length - 1) {
      {
        console.log("first");
        C.push(curr);
      }
    }
  } else if (prev[1] < A[i][0]) {
    console.log("pushing", prev);
    C.push(prev);
    if (i === A.length - 1) {
      C.push(A[i]);
    }
    prev = A[i];
  }

  i++;
  if (i === A.length) {
    break;
  }
}

console.log(C);
