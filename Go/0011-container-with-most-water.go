func maxArea(height []int) int {
	left := 0
	right := len(height) - 1
	maxArea := 0
	for left < right {
		w := right - left
		h := min(height[left], height[right])
		area := w * h
		maxArea = max(maxArea, area)
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return maxArea
}