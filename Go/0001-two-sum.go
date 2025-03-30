func twoSum(nums []int, target int) []int {
	prev := make(map[int]int)

	for i, num := range nums {
		complement := target - num
		if idx, found := prev[complement]; found {
			return []int{idx, i}
		}
		prev[num] = i
	}
	return []int{}
}