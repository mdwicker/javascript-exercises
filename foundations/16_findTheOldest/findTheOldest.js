const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        const currentYear = new Date().getFullYear();
        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath = currentYear;
        }

        if (!current.yearOfDeath) {
            current.yearOfDeath = currentYear;
        }

        let currentAge = current.yearOfDeath - current.yearOfBirth;
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        if (currentAge > oldestAge) {
            return current;
        }

        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
