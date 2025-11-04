/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];

  const backtrack = (start, path, sum) => {
    // ✅ Goal condition
    if (sum === target) {
      res.push([...path]);
      return;
    }

    // ❌ Stop when sum exceeds target
    if (sum > target) return;

    // Explore further
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);          // Choose
      backtrack(i, path, sum + candidates[i]); // Not i + 1 (can reuse same num)
      path.pop();                        // Undo (Backtrack)
    }
  };

  backtrack(0, [], 0);
  return res;
};
