func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	result := ""

	for j := 0; j < len(strs[0]); j++ {
		c := strs[0][j]
		for i := 1; i < len(strs); i++ {
			if j >= len(strs[i]) || strs[i][j] != c {
				return result
			}
		}
		result += string(c)
	}

	return result
}
