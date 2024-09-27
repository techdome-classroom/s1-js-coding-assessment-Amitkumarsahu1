const getTotalIsles = function (grid) {

  if (grid === null || grid.length === 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  let islandCount = 0;

  
  function dfs(r, c) {
      // Base case: if out of bounds or at water, stop the search
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }

      // Mark this cell as water to avoid re-visiting
      grid[r][c] = 'W';

      // Visit all adjacent cells (up, down, left, right)
      dfs(r - 1, c);  // Up
      dfs(r + 1, c);  // Down
      dfs(r, c - 1);  // Left
      dfs(r, c + 1);  // Right
  }

  // Iterate over every cell in the grid
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {  // Start a DFS if we find unvisited land
              islandCount++;
              dfs(r, c);  // Mark the entire island as visited
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;