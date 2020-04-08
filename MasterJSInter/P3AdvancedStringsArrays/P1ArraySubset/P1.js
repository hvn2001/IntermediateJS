function arraySubset(arr, sub) {
    if (sub.length > arr.length) {
        return false;
    }
    for (let i = 0; i < sub.length; i++) {
        const arrIndex = arr.indexOf(sub[i]);
        if (arrIndex === -1) {
            return false;
        }

        delete arr[arrIndex];
    }
    return true;
}