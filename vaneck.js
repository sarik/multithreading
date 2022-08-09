let n = 1;

let vanEckSeq = [0];

let map = new Map();
let lastNumber = 0;

while (n <= 10) {
  lastNumber = vanEckSeq[n - 1];
  console.log(lastNumber);
  if (map.has(lastNumber)) {
    //lastNumber = n - Number(map.get(lastNumber)) - 1
    vanEckSeq.push(n - Number(map.get(lastNumber)));
  } else {
    //lastNumber = 0
    vanEckSeq.push(0);
  }

  map.set(lastNumber, n);

  n++;
}

console.log(vanEckSeq);
