const fibonacci = (function () {
    const seq = [1, 1];

    return function (n) {
        if (seq.length >= n) {
            return seq.slice(0, n);
        }

        while (seq.length < n) {
            const lastItem = seq[seq.length - 1];
            const secondLastItem = seq[seq.length - 2];
            seq.push(lastItem + secondLastItem);
        }

        return seq;
    }
})();