/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = {};
    function dfs(i, j) {
        if (i === m - 1 && j === n - 1) return 1;
        if (i >= m || j >= n) return 0;
        const key = `${i},${j}`;
        if (memo[key]) return memo[key];
        memo[key] = dfs(i + 1, j) + dfs(i, j + 1);
        return memo[key];
    }
    return dfs(0, 0);
};