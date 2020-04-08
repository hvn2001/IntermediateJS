function fibonacci(n) {
    const seq = [1, 1];

    if (n < 2) {
        return seq.slice(0, n);
    }

    while (seq.length < n) {
        const lastItem = seq[seq.length - 1];
        const secondLastItem = seq[seq.length - 2];
        seq.push(lastItem + secondLastItem);
    }

    return seq;
}