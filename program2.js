const decodeTheRing = function (s, p) {

    const m = s.length;  // Length of the message
    const n = p.length;  // Length of the pattern (renamed from `p` to `n` to avoid conflict)

    // Create a DP table of size (m+1) x (n+1) initialized to false
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    // Base case: Empty pattern matches empty message
    dp[0][0] = true;

    // Fill the table for the pattern starting with '*' (since '*' can match an empty message)
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];  // '*' can match an empty string
        }
    }

    // Fill the rest of the table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                // If characters match or pattern has '?', take diagonal value
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // If pattern has '*', we can either:
                // - Use '*' to match no character: dp[i][j-1]
                // - Use '*' to match current character: dp[i-1][j]
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    // The result will be at dp[m][n]
    return dp[m][n];
};
  
  module.exports = decodeTheRing;