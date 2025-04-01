import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int left = 0;
        int ret = 0;

        for (int index = 0; index < s.length(); index++) {
            char c = s.charAt(index);

            if (map.containsKey(c) && map.get(c) >= left) {
                left = map.get(c) + 1;
            }

            map.put(c, index);
            ret = Math.max(ret, index - left + 1);
        }

        return ret;
    }
}