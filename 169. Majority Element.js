// There are actually a lot of possible solutions. Such as:

// sorting the array and picking the n/2th element. O(nlogn) time
// going over the array once and store in a hashmap the occurence count of each element. Then return the element from the hashmap that had the most occurences. That would take O(n) space and O(n) time.
// brute force which is O(n^2)
// However, using the Boyer-Moore majority vote algorithm is the most optimal solution.

// The best approach to solve this by "Boyer-Moore Voting Algorithm"

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    let count = 0;
    let ans = 0;

    for (let num of nums) {
        if (count === 0) {
            ans = num
        }
        count += num == ans ? 1 : -1
    }
    return ans
};