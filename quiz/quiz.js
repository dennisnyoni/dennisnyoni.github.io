function longestNoSpace(...str) {
    let strArr = [...str];
    let valStr = str.filter(word => !word.contains(""));
    let len = valStr[0].length;
    let longest = valStr[0];
    for (word of valStr) {
        if (word.length > longest) {
            longest = word;
        }
    }
    console.log("longest word: " + longest);
    return longest;
}

longestNoSpace("highway", "", "bridge");