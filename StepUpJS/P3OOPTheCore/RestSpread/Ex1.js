// This is a repeat of a problem in a previous
// section. The goal this time around is to take
// the solution and shorten it using our new
// ES2015 functionality.

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

// Shorten the long method chain in this function.
// You might want to use arrow function and
// new Object functions.

// The goal is to:
// Filter out all items with a negative cost.
// Multiply the cost of each remaining item times
// the amount purchased and add it all up.
/*
const sum = Object.keys(obj)
    .map(function(key) {
        return obj[key];
    }).filter(function(item) {
        return item.cost > 0;
    }).map(function(item) {
        return item.cost * item.amount;
    }).reduce(function(sum, next) {
        return sum + next;
    });
 */

const sum = Object.keys(obj)
    .map(key => obj[key])
    .filter(item => item.cost > 0)
    .map(item => item.cost * item.amount)
    .reduce((sum, next) => sum + next);
console.log(sum);

const sum2 = Object.values(obj)
    .filter(item => item.cost > 0)
    .map(item => item.cost * item.amount)
    .reduce((sum, next) => sum + next);
console.log(sum2);