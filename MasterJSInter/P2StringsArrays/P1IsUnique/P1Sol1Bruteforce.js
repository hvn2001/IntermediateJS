function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;
}