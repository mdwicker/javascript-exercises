const fibonacci = function(n) {
    n = Number(n);

    if (n < 0) {
        return "OOPS";
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = curr + prev;
        prev = curr;
        curr = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
