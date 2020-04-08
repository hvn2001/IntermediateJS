function isUnique(str) {
    const chars = str.split('').sort();

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
            return false;
        }
    }

    return true;
}
