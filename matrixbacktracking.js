// QItem for current location and distance
// from source location
class QItem {
  constructor(x, y, w) {
    this.row = x;
    this.col = y;
    this.dist = w;
  }
}

function minDistance(grid) {
  var source = new QItem(0, 0, 0);
  //var source = new QItem(i, j, 0);

  var N = grid.length;
  var M = grid[0].length;

  // To keep track of visited QItems. Marking
  // blocked cells as visited.
  var visited = Array.from(Array(N), () => Array(M).fill(0));
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
      if (grid[i][j] == "0") visited[i][j] = true;
      else visited[i][j] = false;

      // Finding source
      if (grid[i][j] == "s") {
        source.row = i;
        source.col = j;
      }
    }
  }

  console.log(source);

  // applying BFS on matrix cells starting from source
  var q = [];
  q.push(source);
  visited[source.row][source.col] = true;
  while (q.length != 0) {
    var p = q[0];
    q.shift();

    // Destination found;
    if (grid[p.row][p.col] == "d") return [p.row, p.col];

    // moving up
    if (p.row - 1 >= 0 && visited[p.row - 1][p.col] == false) {
      q.push(new QItem(p.row - 1, p.col, p.dist + 1));
      visited[p.row - 1][p.col] = true;
    }

    // moving down
    if (p.row + 1 < N && visited[p.row + 1][p.col] == false) {
      q.push(new QItem(p.row + 1, p.col, p.dist + 1));
      visited[p.row + 1][p.col] = true;
    }

    // moving left
    if (p.col - 1 >= 0 && visited[p.row][p.col - 1] == false) {
      q.push(new QItem(p.row, p.col - 1, p.dist + 1));
      visited[p.row][p.col - 1] = true;
    }

    // moving right
    if (p.col + 1 < M && visited[p.row][p.col + 1] == false) {
      q.push(new QItem(p.row, p.col + 1, p.dist + 1));
      visited[p.row][p.col + 1] = true;
    }
  }
  return [-1, -1];
}

// Driver code
var grid = [
  ["0", "*", "0", "s"],
  ["*", "0", "*", "*"],
  ["0", "*", "*", "*"],
  ["d", "*", "*", "*"],
];

grid = [
  ["0", "0", "0", "0", "0", "0", "0", "*", "*"],
  ["0", "0", "*", "*", "*", "*", "*", "0", "0"],
  ["s", "*", "*", "*", "*", "0", "0", "*", "0"],
  ["0", "0", "*", "0", "0", "0", "0", "*", "*"],
  ["0", "0", "*", "*", "*", "*", "*", "*", "0"],
  ["0", "0", "d", "0", "0", "*", "0", "*", "0"],
];
grid = [
  ["0", "0", "0", "0", "0", "0", "0", "*", "*"],
  ["0", "0", "*", "*", "*", "*", "*", "0", "0"],
  ["s", "*", "*", "*", "*", "0", "0", "*", "0"],
  ["0", "0", "*", "0", "0", "0", "0", "*", "*"],
  ["0", "0", "*", "*", "*", "*", "*", "*", "0"],
  ["0", "0", "d", "0", "0", "*", "0", "*", "0"],
];

console.log(minDistance(grid));
