/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right =height.length-1;
    let max_area = 0;
    while (left < right){
        let h=Math.min(height[left],height[right]);
        let w=right - left;
        let area = h*w;
        max_area = Math.max(max_area,area);
        if (height[left]<height[right]){
            left ++;
        }else
        {
            right--;
        }
    }
    return max_area;
};