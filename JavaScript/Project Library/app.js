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

const bookcase = document.getElementById('bookcase');
const form = document.getElementById('form');
const formButton = document.getElementById('form-button');
const submitButton = document.getElementById('submit-button');
const randomColor = Math.floor(Math.random()*16777215).toString(16);

const render = () => {

     // myLibrary.forEach(book => {
     //      book = document.createElement('div');
     //      bookcase.appendChild(book);
     //      book.style.display = 'inline-block';
     //      book.style.width = '2.5rem';
     //      book.style.height = '4rem';
     //      book.style.background = `#${randomColor}`;
     // })

     // const myLibraryLength = myLibrary.length;
     // for (let i = 0; i < myLibraryLength; i++) {
     //      myLibrary[i] = document.createElement('div');
     //      bookcase.appendChild(myLibrary[i]);
     //      myLibrary[i].style.display = 'inline-block';
     //      myLibrary[i].style.width = '2.5rem';
     //      myLibrary[i].style.height = '4rem';
     //      myLibrary[i].style.background = `#${randomColor}`;
     // }

     const bookContainer = document.createElement('article');
     bookcase.appendChild(bookContainer);
     bookcase.style.margin = '.5rem 1rem';

     const book = document.createElement('div');
     bookContainer.appendChild(book);
     book.setAttribute('class', 'book');
     book.style.background = `#${randomColor}`;

     const title = document.createElement('p');
     book.appendChild(title);
     title.textContent = myLibrary[0].title;

     const author = document.createElement('p');
     book.appendChild(author);
     author.setAttribute('class', 'author');
     author.textContent = `by ${myLibrary[0].author}`;

     const removeBtn = document.createElement('button');
     bookContainer.appendChild(removeBtn);
     removeBtn.setAttribute('class', 'remove-btn')
     removeBtn.textContent = "Remove";

     const statusBtn = document.createElement('button');
     bookContainer.appendChild(statusBtn);
     statusBtn.setAttribute('class', 'status-btn')
     statusBtn.textContent = "Unread";
}

render();

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
