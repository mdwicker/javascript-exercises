const repeatString = function(str, n) {
    if (n < 0) {
        return "ERROR";
    }
    
    outputStr = "";
    for (let i = 0; i < n; i++) {
        outputStr += str;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
