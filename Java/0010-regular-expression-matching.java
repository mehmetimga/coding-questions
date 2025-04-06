class Solution {
    public boolean isMatch(String text, String pattern) {
        int m = text.length(), n = pattern.length();
        boolean[][] dp = new boolean[m + 1][n + 1];

        // Base case: empty text and empty pattern match
        dp[0][0] = true;

        // Handle patterns like a*, a*b*, etc., that can match an empty string
        for (int j = 2; j <= n; j++) {
            if (pattern.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }

        // Fill the DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (pattern.charAt(j - 1) == text.charAt(i - 1) || pattern.charAt(j - 1) == '.') {
                    // Characters match or pattern has '.'
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (pattern.charAt(j - 1) == '*') {
                    // '*' can match zero or more of the preceding element
                    dp[i][j] = dp[i][j - 2] || 
                               ((pattern.charAt(j - 2) == text.charAt(i - 1) || pattern.charAt(j - 2) == '.') && dp[i - 1][j]);
                }
            }
        }

        return dp[m][n];
    }
}