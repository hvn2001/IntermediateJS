function isUnique(str) {
    const chars = new Set();

    for (let i = 0; i < str.length; i++) {
        const thisChar = str[i];

        if (chars.has(thisChar)) {
            return false;
        }

        chars.add(thisChar);
    }

    return true;
}