function maxArea(height: number[]): number {
        let left = 0;
    let right =height.length-1;
    let max_area = 0;
    while (left < right){
        const h:number=Math.min(height[left],height[right]);
        const w:number=right - left;
        const area:number = h*w;
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