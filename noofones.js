let A = 450676354;
//A = 11;
let noOfOnes = 0;

for (let i = 0; i < 32; i++) {
  console.log(Math.pow(2, i));
  let powered = Math.pow(2, i);
  if ((A & powered) !== 0) {
    noOfOnes++;
  }
}
console.log("ans", noOfOnes);
