function fourSum(nums: number[], target: number): number[][] {
    const res: number[][] = [];
    const n = nums.length;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
}

const result = fourSum([1, 0, -1, 0, -2, 2], 0);
console.log(result);
// Output: [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]
