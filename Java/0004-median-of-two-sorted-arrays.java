class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }

        int m = nums1.length;
        int n = nums2.length;
        int total = m + n;
        int half = (total + 1) / 2;

        int left = 0, right = m;

        while (left <= right) {
            int i = (left + right) / 2;
            int j = half - i;

            int A_left  = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];
            int A_right = (i == m) ? Integer.MAX_VALUE : nums1[i];
            int B_left  = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];
            int B_right = (j == n) ? Integer.MAX_VALUE : nums2[j];

            if (A_left <= B_right && B_left <= A_right) {
                if (total % 2 == 0) {
                    return (Math.max(A_left, B_left) + Math.min(A_right, B_right)) / 2.0;
                } else {
                    return Math.max(A_left, B_left);
                }
            } else if (A_left > B_right) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        // Should never reach here for valid input
        return 0.0;
    }
}
