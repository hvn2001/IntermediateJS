function add() {
    const args = [].slice.call(arguments);
    sum = args.reduce(function (num1, num2) {
        return num1 + num2
    }, 0);
    console.log(sum);
}

add(4, 5, 6); // -> [ 4, 5, 6 ]