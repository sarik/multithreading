///https://www.geeksforgeeks.org/maximum-index-a-pointer-can-reach-in-n-steps-by-avoiding-a-given-index-b/
//Given two integers N and B, the task is to print the maximum index a pointer, starting from 0th index can reach in an array of natural numbers(i.e., 0, 1, 2, 3, 4, 5…), say arr[], in N steps without placing itself at index B at any point.

//In each step, the pointer can move from the Current Index to a Jumping Index or can remain at the Current Index.
//Jumping Index = Current Index + Step Number
function maximumIndex(N, B) {
  var max_index = 0;

  // Calculate maximum possible
  // index that can be reached
  for (var i = 1; i <= N; i++) {
    max_index += i;
  }

  var current_index = max_index,
    step = N;

  while (1) {
    // Check if current index and step
    // both are greater than 0 or not
    while (current_index > 0 && N > 0) {
      // Decrement current_index by step
      current_index -= N;

      // Check if current index is
      // equal to B or not
      if (current_index == B) {
        // Restore to previous index
        current_index += N;
      }

      // Decrement step by one
      N--;
    }

    // If it reaches the 0th index
    if (current_index <= 0) {
      // Print result
      return max_index;
    }

    // If max index fails to
    // reach the 0th index
    else {
      N = step;

      // Store max_index - 1 in current index
      current_index = max_index - 1;

      // Decrement max index
      max_index--;

      // If current index is equal to B
      if (current_index == B) {
        current_index = max_index - 1;

        // Decrement current index
        max_index--;
      }
    }
  }
}

let N = 3;
let B = 2;
console.log(maximumIndex(N, B));

N = 3;
B = 1;
console.log(maximumIndex(N, B));
