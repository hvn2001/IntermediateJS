function isUnique(str) {
    const chars = {};

    for (let i = 0; i < str.length; i++) {
        const thisChar = str[i];

        if (chars[thisChar]) {
            return false;
        }

        chars[thisChar] = true;
    }

    return true;
}