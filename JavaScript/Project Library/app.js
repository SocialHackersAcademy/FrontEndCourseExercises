let myLibrary = [];

function Book(author, title, pages, read) {
     // the constructor...
     this.author = author;
     this.title = title;
     this.pages = pages;
     this.read = read;
}

function addBookToLibrary(book) {
     // do stuff here
     return myLibrary.push(book);
}

const theElephantTree = new Book("R.D. Ronald", "The Elephant Tree", 250, "Read");
const requiemForADream = new Book("Hubert Selby Jr.", "Requiem for a Dream", 310, "Read");
const trainspotting = new Book("Irvine Welsh", "Trainspotting", 480, "Unread");

addBookToLibrary(theElephantTree);
addBookToLibrary(requiemForADream);
addBookToLibrary(trainspotting);

const bookShelf = document.getElementById('book-shelf');
const form = document.getElementById('form');
const button = document.getElementById('button');

function showForm() {
    form.style.display = "flex";
}

button.addEventListener('click', showForm);
