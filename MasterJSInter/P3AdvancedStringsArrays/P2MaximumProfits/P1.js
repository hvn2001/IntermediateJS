function getMaxProfit(prices) {
    const possibleProfits = [0];

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            possibleProfits.push(prices[j] - prices[i]);
        }
    }

    return Math.max(...possibleProfits);
}