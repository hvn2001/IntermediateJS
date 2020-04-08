function stringRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        const rotation = str1.slice(i, str1.length) + str1.slice(0, i);

        if (rotation === str2) {
            return true;
        }
    }
    return false;
}