pub fn three_sum(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
    nums.sort_unstable();
    let mut result = Vec::new();
    let len = nums.len();

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue; // Skip duplicate values for the first element
        }

        let (mut left, mut right) = (i + 1, len - 1);

        while left < right {
            let sum = nums[i] + nums[left] + nums[right];

            if sum == 0 {
                result.push(vec![nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;

                // Skip duplicates for left and right pointers
                while left < right && nums[left] == nums[left - 1] {
                    left += 1;
                }
                while left < right && nums[right] == nums[right + 1] {
                    right -= 1;
                }
            } else if sum < 0 {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }

    result
}
