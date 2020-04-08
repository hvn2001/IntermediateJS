const obj = {
    groceries: {
        cost: 33.22,
        amount: 1
    },
    rent: {
        cost: 899.00,
        amount: 1,
    },
    paycheck: {
        cost: -2000,
        amount: 2
    },
    restaurantBills: {
        cost: 20,
        amount: 4
    }
};

// Finish this:
const sum = Object.keys(obj)
    .map(key => obj[key])
    .filter(val => val.cost > 0)
    .reduce((accum, next) => accum + next.cost * next.amount, 0);

console.log(sum);

var sum2 = Object.keys(obj)
    .map(function (key) {
        return obj[key];
    }).filter(function (item) {
        return item.cost > 0;
    }).map(function (item) {
        return item.cost * item.amount;
    }).reduce(function (sum, next) {
        return sum + next;
    });
console.log(sum2);