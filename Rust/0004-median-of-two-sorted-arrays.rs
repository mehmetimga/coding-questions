impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let (a, b) = if nums1.len() <= nums2.len() {
            (nums1, nums2)
        } else {
            (nums2, nums1)
        };

        let m = a.len();
        let n = b.len();
        let total = m + n;
        let half = (total + 1) / 2;

        let mut left = 0;
        let mut right = m;

        while left <= right {
            let i = (left + right) / 2;
            let j = half - i;

            let a_left = if i == 0 { i32::MIN } else { a[i - 1] };
            let a_right = if i == m { i32::MAX } else { a[i] };
            let b_left = if j == 0 { i32::MIN } else { b[j - 1] };
            let b_right = if j == n { i32::MAX } else { b[j] };

            if a_left <= b_right && b_left <= a_right {
                if total % 2 == 0 {
                    return (f64::from(a_left.max(b_left)) + f64::from(a_right.min(b_right))) / 2.0;
                } else {
                    return f64::from(a_left.max(b_left));
                }
            } else if a_left > b_right {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }

        // Should never be reached
        0.0
    }
}
