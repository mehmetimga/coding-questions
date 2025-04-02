var findMedianSortedArrays = function(nums1, nums2) {
    // Always binary search the shorter array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    const total = m + n;
    const half = Math.floor((total + 1) / 2);

    let left = 0, right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;

        const A_left  = (i === 0) ? -Infinity : nums1[i - 1];
        const A_right = (i === m) ? Infinity : nums1[i];
        const B_left  = (j === 0) ? -Infinity : nums2[j - 1];
        const B_right = (j === n) ? Infinity : nums2[j];

        if (A_left <= B_right && B_left <= A_right) {
            if (total % 2 === 0) {
                return (Math.max(A_left, B_left) + Math.min(A_right, B_right)) / 2;
            } else {
                return Math.max(A_left, B_left);
            }
        } else if (A_left > B_right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    // Should never be reached for valid input
    return 0;
};
