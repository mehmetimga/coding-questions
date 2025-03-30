function twoSum (nums, target) {
    const valueToIndex = new Map();
    for (let i=0; i < nums.length; i++){
        const complement = target - nums[i];
        if (valueToIndex.has(complement)) {
            return [valueToIndex.get(complement),i];
        }
        valueToIndex.set(nums[i],i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 
