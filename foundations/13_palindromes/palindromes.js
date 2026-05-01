const palindromes = function (str) {
    const nonWord = /\W/gi;
    const cleanedStr = str.toLowerCase().replaceAll(nonWord, "");
    return cleanedStr.split("").reverse().join("") === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
