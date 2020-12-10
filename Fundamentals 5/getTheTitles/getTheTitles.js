const getTheTitles = function(booksArr) {
    let titles = booksArr.map(book => book.title);
    return titles;
}

module.exports = getTheTitles;
