const numbers = [44, 29, 93];

var oldWay = "Today's lottery numbers are:\n\t- "
    + numbers[0]
    + "\n\t- " + numbers[1]
    + "\n\t- " + numbers[2];

const newWay = `Today's lottery numbers are:
        - ${numbers[0]}
        - ${numbers[1]}
        - ${numbers[2]}`;

console.log(oldWay);
console.log(newWay);