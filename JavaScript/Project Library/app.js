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
const titanic = new Book("Ed W. Marsh", "James Cameron's Titanic", 300, "Unread");

addBookToLibrary(theElephantTree);
addBookToLibrary(requiemForADream);
addBookToLibrary(trainspotting);
addBookToLibrary(titanic);

const bookcase = document.getElementById('bookcase');
const form = document.getElementById('form');
const formButton = document.getElementById('form-button');
const submitButton = document.getElementById('submit-button');
const randomColor = Math.floor(Math.random()*16777215).toString(16);

const render = () => {

     myLibrary.forEach(bookItem => {

          const bookContainer = document.createElement('article');
          bookcase.appendChild(bookContainer);
          bookcase.style.margin = '.5rem 1rem';

          const book = document.createElement('div');
          bookContainer.appendChild(book);
          book.setAttribute('class', 'book');
          book.style.background = `#${randomColor}`;

          const title = document.createElement('p');
          book.appendChild(title);
          title.textContent = bookItem.title;

          const author = document.createElement('p');
          book.appendChild(author);
          author.setAttribute('class', 'author');
          author.textContent = `by ${bookItem.author}`;

          const removeButton = document.createElement('button');
          bookContainer.appendChild(removeButton);
          removeButton.setAttribute('class', 'remove-button')
          removeButton.textContent = "Remove";

          const statusButton = document.createElement('button');
          bookContainer.appendChild(statusButton);
          statusButton.setAttribute('class', 'status-button')
          statusButton.textContent = "Unread";

          let state = false;
          function readStatus() {
               state = !state;
               if (state) {
                    statusButton.textContent = "Read";
                    statusButton.style.background = "green";
                    statusButton.style.color = "white";
               } else {
                    statusButton.textContent = "Unread";
                    statusButton.style.background = "rgb(255, 246, 204)";
                    statusButton.style.color = "black";
               }
          }
          statusButton.addEventListener('click', readStatus);
     });
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
          form.style.top = "-16rem";
          submitButton.style.right = "-10rem";
     }
}
formButton.addEventListener('click', showHideForm);
