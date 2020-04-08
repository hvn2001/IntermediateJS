function removeDupes(str) {
    const characters = {};
    const uniqueCharacters = [];
    for (let i = 0; i < str.length; i++) {
        const thisChar = str[i];

        if (!characters[thisChar]) {
            characters[thisChar] = true;
            uniqueCharacters.push(thisChar);
        }
    }
    return uniqueCharacters.join('');
}