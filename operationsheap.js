let A = [1, 2, 3];
let B = 3;
let original = [...A];
let initial = [...A];
function heapify_min(arr, n) {
  let i = n;

  //while atleast left child exists,ie it is not a leaf
  while (2 * i + 1 < arr.length) {
    let min = Math.min(arr[i][0], arr[2 * i + 1][0]);
    if (2 * i + 2 < arr.length)
      min = Math.min(arr[i][0], arr[2 * i + 1][0], arr[2 * i + 2][0]);

    //if (min === arr[i][0]) break
    if (min === arr[i][0]) {
      let originalMin = Math.min(
        initial[arr[i][1]],
        initial[arr[2 * i + 1][1]]
      );
      if (2 * i + 2 < arr.length)
        originalMin = Math.min(
          initial[arr[i][1]],
          initial[arr[2 * i + 1][1]],
          initial[arr[2 * i + 2][1]]
        );
      if (originalMin === initial[arr[i][1]]) {
        break;
      } else if (originalMin === initial[arr[2 * i + 1][1]]) {
        let temp = arr[i];
        arr[i] = arr[2 * i + 1];
        arr[2 * i + 1] = temp;
        i = 2 * i + 1;
      } else if (originalMin === initial[arr[2 * i + 2][1]]) {
        let temp = arr[i];
        arr[i] = arr[2 * i + 2];
        arr[2 * i + 2] = temp;
        i = 2 * i + 2;
      }
    } else if (min === arr[2 * i + 1][0]) {
      let temp = arr[i];
      arr[i] = arr[2 * i + 1];
      arr[2 * i + 1] = temp;
      i = 2 * i + 1;
    } else if (min === arr[2 * i + 2][0]) {
      let temp = arr[i];
      arr[i] = arr[2 * i + 2];
      arr[2 * i + 2] = temp;
      i = 2 * i + 2;
    }
  }
}

function extract_min(arr) {
  let len = arr.length;
  let temp = arr[0];
  arr[0] = arr[len - 1];
  arr[len - 1] = temp;
  arr.pop();
  heapify_min(arr, 0);
  return temp;
}

function insert_min(arr, k) {
  arr.push(k);

  let i = arr.length - 1;

  while (i > 0) {
    let parent = Math.floor((i - 1) / 2);

    if (arr[parent][0] > arr[i][0]) {
      let temp = arr[i];
      arr[i] = arr[parent];
      arr[parent] = temp;

      i = Math.floor((i - 1) / 2);
    } else if (
      arr[parent][0] === arr[i][0] &&
      initial[arr[parent][1]] > initial[arr[i][0]]
    ) {
      let temp = arr[i];
      arr[i] = arr[parent];
      arr[parent] = temp;

      i = Math.floor((i - 1) / 2);
    } else break;
  }
}

//pushing all possible next states
A = A.map((val, index) => [val + val, index]);
let lastNonLeaf = Math.floor((A.length - 2) / 2);
for (let i = lastNonLeaf; i >= 0; i--) {
  heapify_min(A, i);
}

for (let i = 0; i < B; i++) {
  let [nextState, index] = extract_min(A);
  original[index] = nextState;

  insert_min(A, [nextState + initial[index], index]);
}

let max = original[0];
for (let i = 1; i < original.length; i++) {
  max = Math.max(max, original[i]);
}

console.log(max);
