function arraySubset(arr, sub) {
    if (sub.length > arr.length) {
        return false;
    }

    const arrMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (arrMap.has(item)) {
            arrMap.set(item, arrMap.get(item) + 1);
        } else {
            arrMap.set(item, 1);
        }
    }

    for (let i = 0; i < sub.length; i++) {
        const currentItem = sub[i];
        if (!arrMap.has(currentItem)) {
            return false;
        }

        arrMap.set(currentItem, arrMap.get(currentItem) - 1);
        if (arrMap.get(currentItem) === 0) {
            arrMap.delete(currentItem);
        }
    }

    return true;
}