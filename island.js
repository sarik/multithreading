let A = [
  [0, 0, 1, 0, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 0, 1],
];
let grid = A;
function bfs(grid, i, j) {
  if (i < 0 || i >= grid.length) return;
  if (j < 0 || j >= grid[0].length) return;
  if (grid[i][j] === 0) return;
  if (grid[i][j] === 2) return;

  grid[i][j] = 2;
  bfs(grid, i - 1, j);
  bfs(grid, i + 1, j);
  bfs(grid, i, j - 1);
  bfs(grid, i, j + 1);

  //Next 4 lines for diaginal connections
  bfs(grid, i + 1, j + 1);
  bfs(grid, i - 1, j - 1);
  bfs(grid, i - 1, j + 1);
  bfs(grid, i + 1, j - 1);
}

let ans = 0;

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[i][j] === 0) continue;
    if (grid[i][j] === 2) continue;
    if (grid[i][j] === 1) {
      bfs(grid, i, j);
      ans++;
    }
  }
}

console.log(ans);
