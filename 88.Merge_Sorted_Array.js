// Explanation
// p1 starts at the last element of the initial part of nums1 (m - 1).
// p2 starts at the last element of nums2 (n - 1).
// p starts at the last element of the combined array length (m + n - 1).
// The for loop iterates from the end of the combined array nums1 towards the beginning.

// If p2 is less than 0, it means all elements from nums2 have been merged, and the loop can be terminated.
// Inside the loop, compare the elements at nums1[p1] and nums2[p2].
// If nums1[p1] is greater, set nums1[i] to nums1[p1] and decrement p1.
// Otherwise, set nums1[i] to nums2[p2] and decrement p2.



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    for (let i = p; i >= 0; i--) {

        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};





