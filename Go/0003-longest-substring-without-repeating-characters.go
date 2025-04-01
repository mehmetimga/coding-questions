func lengthOfLongestSubstring(s string) int {
	m := make(map[rune]int)
	left := 0
	ret := 0

	for index, char := range s {
		if prevIndex, exists := m[char]; exists && prevIndex >= left {
			left = prevIndex + 1
		}
		m[char] = index
		if currentLen := index - left + 1; currentLen > ret {
			ret = currentLen
		}
	}

	return ret
}