/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(-1));

  function dfs(i, j) {
    if (i === 0 && j === 0) return grid[0][0];
    if (i < 0 || j < 0) return Infinity;
    if (dp[i][j] !== -1) return dp[i][j];

    return (dp[i][j] = grid[i][j] + Math.min(dfs(i - 1, j), dfs(i, j - 1)));
  }
  return dfs(m - 1, n - 1);
};