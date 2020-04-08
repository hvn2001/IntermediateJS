const fibonacci = (function () {
    const seq = [1, 1];

    return function (n) {
        console.log('\nCalled with ' + n);

        if (seq.length >= n) {
            console.log('Nothing to compute');
            return seq.slice(0, n);
        }

        while (seq.length < n) {
            const lastItem = seq[seq.length - 1];
            const secondLastItem = seq[seq.length - 2];
            seq.push(lastItem + secondLastItem);
            console.log(`pushed ${lastItem + secondLastItem}`);
        }

        return seq;
    }
})();

console.log('Result: ' + fibonacci(7));
console.log('Result: ' + fibonacci(4));
console.log('Result: ' + fibonacci(9));