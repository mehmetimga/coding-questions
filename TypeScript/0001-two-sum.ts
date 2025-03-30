function twoSum(nums: number[], target: number): number[] {
    const valueToIndex: Map<number, number> = new Map();

    for (let i=0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (valueToIndex.has(complement)){
            return [valueToIndex.get(complement)!,i];
        }
        valueToIndex.set(nums[i],i);
    }
    return [];
}