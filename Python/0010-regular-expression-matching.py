class Solution:
    def isMatch(self, text: str, pattern: str) -> bool:
        m, n = len(text), len(pattern)
        dp = [[False] * (n + 1) for _ in range(m + 1)]

        # Base case: empty text and empty pattern match
        dp[0][0] = True

        # Handle patterns like a*, a*b*, etc., that can match an empty string
        for j in range(2, n + 1):
            if pattern[j - 1] == '*':
                dp[0][j] = dp[0][j - 2]

        # Fill the DP table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if pattern[j - 1] == text[i - 1] or pattern[j - 1] == '.':
                    # Characters match or pattern has '.'
                    dp[i][j] = dp[i - 1][j - 1]
                elif pattern[j - 1] == '*':
                    # '*' can match zero or more of the preceding element
                    dp[i][j] = dp[i][j - 2] or \
                               ((pattern[j - 2] == text[i - 1] or pattern[j - 2] == '.') and dp[i - 1][j])

        return dp[m][n]