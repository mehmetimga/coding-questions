class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> prev;
        for(int i=0;i<nums.size();i++){
            if (prev.find(target-nums[i])!=prev.end()){
                return {prev[target-nums[i]], i};
            }else{
                prev[nums[i]]=i;
            }
        }
        return {};
    }
};