impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let (mut left, mut right) = (0, height.len() - 1);
        let mut max_area = 0;

        while left < right {
            let (h_left, h_right) = (height[left], height[right]);
            let height = h_left.min(h_right);
            let width = (right - left) as i32;
            let area = height * width;
            max_area = max_area.max(area);

            if h_left < h_right {
                left += 1;
            } else {
                right -= 1;
            }
        }

        max_area
    }
}
