const getTotalIsles = function (grid) {


  if (grid === null || grid.length === 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let islandCount = 0;

    function dfs(r, c) {
      
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
          return;
      }
      grid[r][c] = 'W';
};

module.exports = getTotalIsles;