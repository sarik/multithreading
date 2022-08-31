function isSafe(mat, visited, x, y) {
    return (x >= 0 && x < mat.length && y >= 0 && y < mat[0].length) &&
        mat[x][y] == 1 && !visited[x][y];
}

function findShortestPath(mat, visited,
    i, j, x, y, min_dist, dist) {

    // if the destination is found, update `min_dist`
    if (i == x && j == y) {
        return Math.min(dist, min_dist);
    }

    // set (i, j) cell as visited
    visited[i][j] = true;

    // go to the bottom cell
    if (isSafe(mat, visited, i + 1, j)) {
        min_dist = findShortestPath(mat, visited, i + 1, j, x, y,
            min_dist, dist + 1);
    }

    // go to the right cell
    if (isSafe(mat, visited, i, j + 1)) {
        min_dist = findShortestPath(mat, visited, i, j + 1, x, y,
            min_dist, dist + 1);
    }

    // go to the top cell
    if (isSafe(mat, visited, i - 1, j)) {
        min_dist = findShortestPath(mat, visited, i - 1, j, x, y,
            min_dist, dist + 1);
    }

    // go to the left cell
    if (isSafe(mat, visited, i, j - 1)) {
        min_dist = findShortestPath(mat, visited, i, j - 1, x, y,
            min_dist, dist + 1);
    }

    // backtrack: remove (i, j) from the visited matrix
    visited[i][j] = false;

    return min_dist;

}

function findsShortestPath(mat, i, j, destinationx, destinationy) {
    if (mat == null || mat.length == 0 || mat[i][j] == 0 || mat[x][y] == 0) {
        return -1;
    }

    let min_dist;

    let visited = new Array(mat.length)

    for (let i = 0; i < visited.length; i++) {
        visited = new Array(A[0].length).fill(-1)
    }

    min_dist = findShortestPath(mat, visited, i, j, x, y, Integer.MAX_VALUE, 0);
    if (min_dist != Integer.MAX_VALUE) {
        return min_dist;
    }
    return -1;

}

/*

'''
#include
#include
#include
using namespace std;

// M × N matrix
#define M 6
#define N 6

// Check if it is possible to go to (x, y) from the current position. The
// function returns false if the cell has value 0 or already visited
bool isSafe(int mat[M][N], int visited[M][N], int x, int y)
{
if (mat[x][y] == 1 || visited[x][y]) {
return false;
}

return true;
}

// Returns false if not a valid position
bool isValid(int x, int y)
{
if (x < M && y < N && x >= 0 && y >= 0) {
return true;
}

return false;
}

bool isBoundary(int x, int y,int mat[M][N]) {
if (((x == M - 1) || (x == 0) || (y == N - 1) || (y == 0)) && mat[x][y] == 0)
return true;

return false;
}
// Find the shortest possible route in a matrix mat from source cell (0, 0)
// to destination cell (x, y).

// min_dist is passed by reference and stores the length of the longest path
// from source to a destination found so far, and dist maintains the length
// of the path from a source cell to a current cell (i, j).
int rx , ry;
int ix = 4, iy = 4;
void findShortestPath(int mat[M][N], int visited[M][N], int i, int j, int &min_dist, int dist)
{
// if the destination is found, update min_dist
if (isBoundary(i, j, mat) && isSafe(mat, visited, i, j) && (i != ix && j != iy))
{
if(dist < min_dist) {
min_dist = dist;
rx = i;
ry = j;
}
return;
}

// set `(i, j)` cell as visited
visited[i][j] = 1;

// go to the bottom cell
if (isValid(i + 1, j) && isSafe(mat, visited, i + 1, j)) {
    findShortestPath(mat, visited, i + 1, j,  min_dist, dist + 1);
}

// go to the right cell
if (isValid(i, j + 1) && isSafe(mat, visited, i, j + 1)) {
    findShortestPath(mat, visited, i, j + 1, min_dist, dist + 1);
}

// go to the top cell
if (isValid(i - 1, j) && isSafe(mat, visited, i - 1, j)) {
    findShortestPath(mat, visited, i - 1, j, min_dist, dist + 1);
}

// go to the left cell
if (isValid(i, j - 1) && isSafe(mat, visited, i, j - 1)) {
    findShortestPath(mat, visited, i, j - 1,  min_dist, dist + 1);
}

// backtrack: remove `(i, j)` from the visited matrix
visited[i][j] = 0;
}

int main()
{
int mat[M][N] =

{
    {1, 0, 0, 1, 1, 1}, 
    {1, 0, 0, 0, 1, 1},
    {1, 1, 1, 0, 1, 1},
    {1, 1, 1, 0, 1, 1},
    {0, 1, 0, 0, 0, 0},
    {0, 0, 0, 1, 1, 1},
};
// construct a matrix to keep track of visited cells
int visited[M][N];

// initially, all cells are unvisited
memset(visited, 0, sizeof visited);

int min_dist = INT_MAX;
findShortestPath(mat, visited, 4, 4, min_dist, 0);

if (min_dist != INT_MAX)
{
    cout << "The shortest path from source to destination "
            "has length " << min_dist << " x = " << rx << " y =  " << ry <<endl;
}
else {
    cout << "Destination can't be reached from a given source";
}

return 0


*/