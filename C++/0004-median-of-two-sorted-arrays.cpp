class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Make sure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }

        int m = nums1.size();
        int n = nums2.size();
        int total = m + n;
        int half = (total + 1) / 2;

        int left = 0, right = m;

        while (left <= right) {
            int i = (left + right) / 2;
            int j = half - i;

            int A_left  = (i == 0) ? INT_MIN : nums1[i - 1];
            int A_right = (i == m) ? INT_MAX : nums1[i];
            int B_left  = (j == 0) ? INT_MIN : nums2[j - 1];
            int B_right = (j == n) ? INT_MAX : nums2[j];

            if (A_left <= B_right && B_left <= A_right) {
                if (total % 2 == 0) {
                    return (max(A_left, B_left) + min(A_right, B_right)) / 2.0;
                } else {
                    return max(A_left, B_left);
                }
            } else if (A_left > B_right) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        // Should never reach here if inputs are valid
        return 0.0;
    }
};
