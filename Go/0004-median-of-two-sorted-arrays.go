import (
	"math"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	// Ensure nums1 is the smaller array
	if len(nums1) > len(nums2) {
		return findMedianSortedArrays(nums2, nums1)
	}

	m, n := len(nums1), len(nums2)
	total := m + n
	half := (total + 1) / 2

	left, right := 0, m

	for left <= right {
		i := (left + right) / 2
		j := half - i

		A_left := math.Inf(-1)
		if i > 0 {
			A_left = float64(nums1[i-1])
		}
		A_right := math.Inf(1)
		if i < m {
			A_right = float64(nums1[i])
		}

		B_left := math.Inf(-1)
		if j > 0 {
			B_left = float64(nums2[j-1])
		}
		B_right := math.Inf(1)
		if j < n {
			B_right = float64(nums2[j])
		}

		if A_left <= B_right && B_left <= A_right {
			if total%2 == 0 {
				return (math.Max(A_left, B_left) + math.Min(A_right, B_right)) / 2.0
			} else {
				return math.Max(A_left, B_left)
			}
		} else if A_left > B_right {
			right = i - 1
		} else {
			left = i + 1
		}
	}

	// Should not reach here
	return 0.0
}
