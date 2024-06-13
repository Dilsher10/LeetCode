/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let maxj = 0;
    let oldMax = 0;
    let jump = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxj = Math.max(maxj, i + nums[i])
        if (oldMax === i) {
            jump++
            oldMax = maxj
        }
    }
    return jump
};