function highestFrequency(strings) {
    const frequencies = {};
    let maxFrequency = 0;
    let mostFrequentString = strings[0];

    for (let i = 0; i < strings.length; i++) {
        const thisStr = strings[i];

        if (frequencies[thisStr] === undefined) {
            frequencies[thisStr] = 1;
        } else {
            frequencies[thisStr]++;
        }

        if (frequencies[thisStr] > maxFrequency) {
            maxFrequency = frequencies[thisStr];
            mostFrequentString = thisStr;
        }
    }

    return mostFrequentString;
}