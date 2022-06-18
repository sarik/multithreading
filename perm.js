let A = [2, 2, 2];
function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

A = [428, 56, 88, 12];
function isNumberSqaure(num) {
  return Math.sqrt(num) === Math.floor(Math.sqrt(num));
}

let ans = [];

function finPer(arr, i, map) {
  if (i > 1 && i <= arr.length && !isNumberSqaure(arr[i - 1] + arr[i - 2])) {
    console.log(arr, i, "return");
    return;
  } else if (
    i > 1 &&
    i < arr.length &&
    isNumberSqaure(arr[i - 1] + arr[i - 2])
  ) {
    console.log(arr, i);
  }

  if (i === arr.length) {
    let curr = [...arr];

    //console.log(curr.toString(), map);
    if (!map.has(curr.toString())) {
      //console.log(curr.toString());
      ans.push(curr.toString());

      map.set(curr.toString(), "1");
    }
    return;
  }

  for (let j = i; j < arr.length; j++) {
    //if (arr[i] === arr[j]) continue

    swap(arr, i, j);
    /*if (i > 0 && !isNumberSqaure(arr[i] + arr[i - 1])) {
      return;
    }*/
    finPer(arr, i + 1, map);
    swap(arr, i, j);
  }
}

let map = new Map();
finPer(A, 0, map);

console.log(ans);
