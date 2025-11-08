class Solution {
    public int totalNQueens(int n) {
     return backtrack(0, n, 0, 0, 0);
    }

    private int backtrack(int row, int n, int cols, int diag1, int diag2) {
        if (row == n) return 1; // Found one valid arrangement

        int count = 0;
        // Determine available positions (1 bits = available)
        int available = ((1 << n) - 1) & ~(cols | diag1 | diag2);

        while (available != 0) {
            int position = available & -available; // Get rightmost 1
            available -= position; // Remove that bit

            count += backtrack(
                row + 1,
                n,
                cols | position,
                (diag1 | position) << 1,
                (diag2 | position) >> 1
            );
        }

        return count;
    }
}