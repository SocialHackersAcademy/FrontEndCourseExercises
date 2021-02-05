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
const formButton = document.getElementById('form-button');
const submitButton = document.getElementById('submit-button');

let state = false;

function showHideForm() {
     state = !state;
     if (state) {
          formButton.textContent = "CANCEL";
          form.style.top = "1rem";
          submitButton.style.right = "1rem";
     } else {
          formButton.textContent = "NEW BOOK";
          form.style.top = "-15rem";
          submitButton.style.right = "-10rem";
     }
}

formButton.addEventListener('click', showHideForm);
