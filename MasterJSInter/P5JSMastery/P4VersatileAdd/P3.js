function add(num1, num2) {
    if (num2 === undefined) {
        return function (num3) {
            // return something here
        }
    }

    return num1 + num2;
}