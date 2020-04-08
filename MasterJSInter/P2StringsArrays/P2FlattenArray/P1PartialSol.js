function flatten(nestedArray) {
    const newArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        const thisItem = nestedArray[i];

        if (Array.isArray(thisItem)) {
            for (let j = 0; j < thisItem.length; j++) {
                newArray.push(thisItem[j]);
            }
        } else {
            newArray.push(thisItem);
        }
    }
    return newArray;
}