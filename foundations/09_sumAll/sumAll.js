const sumAll = function(min, max) {
    if (!Number.isInteger(min)
        || !Number.isInteger(max)
        || min < 0
        || max < 0
    ) {
        return "ERROR"
    }

    if (max < min) {
        const temp = max;
        max = min;
        min = temp;
    }

    // Sum of a range of numbers can be found with (n/2) * (first + last)
    return ((max - min + 1)/2) * (min + max);
};

// Do not edit below this line
module.exports = sumAll;
