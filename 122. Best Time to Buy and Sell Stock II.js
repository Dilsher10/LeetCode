// To solve the problem of finding the maximum profit from buying and selling stock on multiple days, you can follow a greedy algorithm approach. The idea is to take advantage of every upward trend in stock prices by buying at the start of the trend and selling at the end. Here's how you can implement this in JavaScript:

// Initialize a variable to keep track of the total profit.
// Loop through the prices array and for each day, check if the next day's price is higher than the current day's price.
// If the next day's price is higher, add the difference (next day's price - current day's price) to the total profit.
// Return the total profit after the loop ends.
// Here's the JavaScript code implementing this logic:


// Explanation:
// Initialization:

// We initialize totalProfit to 0.
// Loop through the prices:

// We iterate from the first day to the second last day (i < prices.length - 1), because we will be comparing the current day's price with the next day's price.
// Check for profit opportunity:

// If prices[i + 1] > prices[i], it means there is a profit opportunity if we buy on day i and sell on day i + 1.
// We add the difference prices[i + 1] - prices[i] to totalProfit.
// Return the total profit:

// After the loop ends, totalProfit contains the maximum profit we can achieve with the given stock prices.

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let totalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        // check if the next day's price is higher than the current day's price.
        if (prices[i + 1] > prices[i]) {
            // If the next day's price is higher, add the difference (next day's price - current day's price) to the total profit.
            totalProfit += prices[i + 1] - prices[i];
        }
    }

    return totalProfit;
};
