if (localStorage.length > 0) {
     myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
}
if (localStorage.length === 0) {
     myLibrary = [];
}

function Book(author, title, pages, status) {
     // the constructor...
     this.author = author;
     this.title = title;
     this.pages = pages;
     this.status = status;
}

function addBookToLibrary(book) {
     // do stuff here
     myLibrary.push(book);
     localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

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

          const removeButton = document.createElement('button');
          bookContainer.appendChild(removeButton);
          removeButton.setAttribute('class', 'remove-button')
          removeButton.textContent = "Remove";

          const removeBookItem = () => {
               const indexOfBookItem = myLibrary.indexOf(bookItem);
               myLibrary.splice(indexOfBookItem, 1);
               localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
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
                    bookItem.status = "Read";
                    statusButton.textContent = "Read";
                    statusButton.setAttribute('class', 'status-button status-read');
               } else {
                    bookItem.status = "Unread";
                    statusButton.textContent = "Unread";
                    statusButton.setAttribute('class', 'status-button status-unread');
               }
               localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
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
