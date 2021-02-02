/*
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "not read yet"
}
*/

/* Object blueprint aka object constructor */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`);
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}

/* Create a new object with the keyword 'new', then call the function */
const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
book.info();

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(theHobbit.info());
