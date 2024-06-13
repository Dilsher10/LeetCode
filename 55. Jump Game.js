// The approach provided in the solution above, known as the "Greedy" algorithm, is considered the best for solving the Jump Game problem.This approach is optimal because it efficiently determines whether you can reach the last index using a linear scan through the array.Here's why the Greedy approach is the best:

// Time Complexity:

// The Greedy algorithm has a time complexity of
// 𝑂
//     (
//         𝑛
//     )
// O(n), where
// 𝑛
// n is the length of the input array.This linear time complexity is the best possible for this problem because any solution must inspect every element of the array at least once.
// Space Complexity:

// The Greedy algorithm uses constant extra space, i.e.,
//     𝑂
//         (
//             1
//         )
// O(1).It only maintains a single variable(maxReach) to track the farthest index that can be reached at any point.
// Simplicity and Efficiency:

// The implementation of the Greedy algorithm is straightforward and easy to understand.It iterates through the array once and performs a constant amount of work for each element.
// Greedy Algorithm Implementation:
// Here's the implementation again for reference:

// javascript
// Copy code


// Explanation:
// Initialization:

// We initialize maxReach to 0. This variable keeps track of the farthest index we can reach so far.
// Iterate through the array:

// We iterate through each index i of the array.
// If i is greater than maxReach, it means we cannot reach this index from any of the previous indices, so we return false.
// Update maxReach:

// For each index i, we update maxReach to the maximum of its current value and i + nums[i]. This step ensures we always keep track of the farthest index we can reach from the current index.
// Check if we can reach the last index:

// If maxReach is greater than or equal to the last index (nums.length - 1), we return true.
// Return false if loop completes:

// If the loop completes without finding a way to reach the last index, we return false.

//         0 1 2 3 4
// nums = [3,2,1,0,4]

// maxReach = 3

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0;  // This variable keeps track of the farthest index we can reach so far.

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;  // If the current index is greater than the farthest reachable index, return false.
        }
        maxReach = Math.max(maxReach, i + nums[i]);  // Update the farthest reachable index.
        if (maxReach >= nums.length - 1) {
            return true;  // If the farthest reachable index is greater than or equal to the last index, return true.
        }
    }

    return false;  // If we exit the loop without returning true, return false.
};

// Why Greedy is Best:
// Optimal Time Complexity: No algorithm can solve this problem faster than
// 𝑂
//     (
//         𝑛
//     )
// O(n) because every element must be checked at least once.
// Optimal Space Complexity: The Greedy algorithm only uses a single additional variable, making it space - efficient.
//     Simplicity: The algorithm is simple to implement and understand, reducing the likelihood of bugs and making it easier to maintain.
// Other Approaches:
// While there are other approaches to solve this problem, such as Dynamic Programming(DP), they generally have higher time and / or space complexity:

// Dynamic Programming:
// A DP approach might use an array to keep track of whether each index is reachable, resulting in
//     𝑂
//         (
//             𝑛
// 2
//         )
// O(n 
// 2
// ) time complexity and
// 𝑂
//     (
//         𝑛
//     )
// O(n) space complexity.
// While DP can be useful for more complex variations of the problem, it is less efficient for the basic Jump Game problem compared to the Greedy approach.
//     Conclusion:
// For the basic Jump Game problem, the Greedy approach is the best due to its optimal time and space complexity, combined with its straightforward implementation.







//YouTube Link: https://www.youtube.com/watch?v=pvg0yrD-E5w