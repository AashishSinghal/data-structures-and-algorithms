/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const results = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        results[i] = nums[i] + results[i-1]
    }
    return results
};

console.log(runningSum([1,2,3,4]))