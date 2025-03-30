import java.util.HashMap;
import java.util.Map;

public class Solution {

    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> valueToIndex = new HashMap<>();
        for (int i=0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (valueToIndex.containsKey(complement)){
                return new int[] { valueToIndex.get(complement),i};
            }
            valueToIndex.put(nums[i],i);
        }
        return new int[0]
    }
}