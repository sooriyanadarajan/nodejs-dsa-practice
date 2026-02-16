function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let curr = nums[0];

    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(max, curr);
    }
    return max;
}


console.log(maxSubArray([1,3,4,5,6,7,8,9,34]))