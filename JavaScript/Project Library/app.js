let myLibrary = [];

function Book(author, title, pages, status) {
     // the constructor...
     this.author = author;
     this.title = title;
     this.pages = pages;
     this.status = status;
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
const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const newBookPages = document.getElementById('pages');
const newBookStatus = document.getElementById('status');

const submitForm = (event) => {
     event.preventDefault();
     validateInput();
     saveNewBookInMyLibrary();
     event.target.reset(); // same as --> form.reset();
     slideInForm();
     render();
}
form.addEventListener('submit', submitForm);

const validateInput = () => {

     const newBookPagesValue = newBookPages.value;

     if (newBookPagesValue <= 0) {
          newBookPages.setAttribute('class', 'error');
          return alert('Please enter the correct number of pages!');
     }
     newBookPages.removeAttribute('class', 'error');
     alert('New book submitted successfully!');
}

const saveNewBookInMyLibrary = () => {
     const newBookTitleValue = newBookTitle.value.trim();
     const newBookAuthorValue = newBookAuthor.value.trim();
     const newBookPagesValue = newBookPages.value;
     const newBookStatusValue = newBookStatus.value;

     // order of parameters: Book(author, title, pages, read)
     const newBookInstance = new Book(newBookAuthorValue, newBookTitleValue, newBookPagesValue, newBookStatusValue);
     addBookToLibrary(newBookInstance);
}

const render = () => {

     bookcase.innerHTML = "";

     myLibrary.forEach(bookItem => {

          const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

          const bookContainer = document.createElement('article');
          bookcase.appendChild(bookContainer);
          bookcase.style.margin = '.5rem 1rem';

          const book = document.createElement('div');
          bookContainer.appendChild(book);
          book.setAttribute('class', 'book');
          book.style.background = randomColor;

          const title = document.createElement('p');
          book.appendChild(title);
          title.textContent = bookItem.title;

          const pages = document.createElement('p');
          book.appendChild(pages);
          pages.setAttribute('class', 'pages');
          pages.innerHTML = `${bookItem.pages}<br>pages`;

          const author = document.createElement('p');
          book.appendChild(author);
          author.setAttribute('class', 'author');
          author.textContent = `by ${bookItem.author}`;

          localStorage.setItem(`${bookItem.title}`, JSON.stringify(bookItem));

          const removeButton = document.createElement('button');
          bookContainer.appendChild(removeButton);
          removeButton.setAttribute('class', 'remove-button')
          removeButton.textContent = "Remove";

          const removeBookItem = () => {
               const indexOfBookItem = myLibrary.indexOf(bookItem);
               myLibrary.splice(indexOfBookItem, 1);
               localStorage.removeItem(`${bookItem.title}`);
               render();
          }
          removeButton.addEventListener('click', removeBookItem);

          const statusButton = document.createElement('button');
          bookContainer.appendChild(statusButton);
          statusButton.setAttribute('class', 'status-button');
          statusButton.textContent = bookItem.status;
          if (statusButton.textContent === "Read") {
               statusButton.setAttribute('class', 'status-button status-read');
          }
          if (statusButton.textContent === "Unread") {
               statusButton.setAttribute('class', 'status-button status-unread');
          }

          let state = false;
          const readStatus = () => {
               state = !state;
               if (state) {
                    statusButton.textContent = "Read";
                    statusButton.setAttribute('class', 'status-button status-read');
               } else {
                    statusButton.textContent = "Unread";
                    statusButton.setAttribute('class', 'status-button status-unread');
               }
          }
          statusButton.addEventListener('click', readStatus);
     });
}
render();

let state = false;
const showHideForm = () => {
     state = !state;
     if (state) {
          slideOutForm();
     } else {
          slideInForm();
     }
}
formButton.addEventListener('click', showHideForm);

const slideOutForm = () => {
     formButton.textContent = "CANCEL";
     form.style.top = "1rem";
     submitButton.style.right = "1rem";
}

const slideInForm = () => {
     formButton.textContent = "NEW BOOK";
     form.style.top = "-16rem";
     submitButton.style.right = "-10rem";
     newBookPages.removeAttribute('class', 'error');
     form.reset();
}

console.log(localStorage);
console.log(Object.values(localStorage));
console.log(Object.values(localStorage)[0]);
console.log(Object.values(localStorage)[1]);
console.log(Object.values(localStorage)[2]);
console.log(Object.values(localStorage)[3]);
console.log(Object.values(localStorage)[4]);
console.log(Object.values(localStorage)[5]);
console.log(Object.values(localStorage)[6]);
console.log(Object.values(localStorage)[7]);
console.log(Object.values(localStorage)[8]);
console.log(Object.values(localStorage)[9]);
console.log(Object.values(localStorage)[10]);
console.log(Object.values(localStorage)[11]);
console.log(Object.values(localStorage)[12]);
console.log(Object.values(localStorage)[13]);
console.log(Object.values(localStorage)[14]);
console.log(Object.values(localStorage)[15]);

// console.log(localStorage[Trainspotting - title]);

// localStorage.forEach(item => {
//      const key = 
// })