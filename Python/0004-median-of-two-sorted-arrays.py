class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Ensure nums1 is the smaller array
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        m, n = len(nums1), len(nums2)
        total = m + n
        half = (m + n + 1) // 2

        left, right = 0, m
        while left <= right:
            i = (left + right) // 2
            j = half - i

            A_left = nums1[i - 1] if i > 0 else float('-inf')
            A_right = nums1[i] if i < m else float('inf')
            B_left = nums2[j - 1] if j > 0 else float('-inf')
            B_right = nums2[j] if j < n else float('inf')

            if A_left <= B_right and B_left <= A_right:
                # Found correct partition
                if total % 2 == 0:
                    return (max(A_left, B_left) + min(A_right, B_right)) / 2
                else:
                    return max(A_left, B_left)
            elif A_left > B_right:
                right = i - 1
            else:
                left = i + 1
