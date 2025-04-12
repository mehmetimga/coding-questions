pub fn three_sum_closest(mut nums: Vec<i32>, target: i32) -> i32 {
    nums.sort_unstable();
    let mut closest = nums[0] + nums[1] + nums[2];

    for i in 0..nums.len() - 2 {
        let mut left = i + 1;
        let mut right = nums.len() - 1;

        while left < right {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum - target).abs() < (closest - target).abs() {
                closest = sum;
            }

            if sum < target {
                left += 1;
            } else if sum > target {
                right -= 1;
            } else {
                return sum; // exact match
            }
        }
    }

    closest
}
fn main() {
    // Test cases
    let test_cases = vec![
        (vec![-1, 2, 1, -4], 1),
        (vec![0, 0, 0], 1),
        (vec![1, 1, 1], 3),
        (vec![1, 2, 3], 6),
    ];

    for (nums, target) in test_cases {
        println!("Closest sum to {}: {}", target, three_sum_closest(nums, target));
    }
}