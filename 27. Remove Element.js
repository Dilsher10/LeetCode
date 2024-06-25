/*
To solve this problem in JavaScript, you can use a two-pointer approach. One pointer will traverse the array, 
and the other will track the position of elements that are not equal to val. Here's how you can implement this:

Explanation

Initialization: Start with k = 0 which will count the number of elements not equal to val.

Iteration: Traverse through the array nums.

Comparison: For each element, check if it is not equal to val.

Placement: If it is not equal, place it at the current position of k and increment k.

Result: After the loop, k will be the number of elements that are not equal to val, and the first k elements of
nums will contain the elements that are not equal to val.
This approach ensures that you are modifying the array in place and only using O(1) extra space, which is 
efficient.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;

};