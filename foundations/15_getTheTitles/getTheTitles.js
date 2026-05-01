const getTheTitles = function(books) {
    return books.reduce((arr, book) => {
        arr.push(book.title);
        return arr;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
