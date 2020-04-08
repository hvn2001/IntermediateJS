let count = 0;

function getMaxProfit(prices) {
    const possibleProfits = [];

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            possibleProfits.push(prices[j] - prices[i]);
            count++;
        }
    }

    return Math.max(...possibleProfits);
}

getMaxProfit([1, 2, 3]);
console.log(count);