## Resources
1. toggle button https://stackoverflow.com/questions/3047755/i-am-trying-to-make-a-simple-toggle-button-in-javascript
2. random hex color https://css-tricks.com/snippets/javascript/random-hex-color/
3. button outside the form https://stackoverflow.com/questions/7020659/submit-form-using-a-button-outside-the-form-tag/12567605
    1. 
    ```html
    <form method="get" id="form1" action="something.php">

    </form>

    <!-- External button-->
    <button type="submit" form="form1">Click me!</button>
    ```
4. form validation https://www.youtube.com/watch?v=rsd4FNGTRBw&t=1500s
5. submit event https://www.youtube.com/watch?v=I_fVO_NzT2g
6. clear form after submit https://stackoverflow.com/questions/14589193/clearing-my-form-inputs-after-submission
    1. 
    ```javascript
    document.getElementById("myForm").reset();
    ```
    2. 
    ``` javascript
    event.target.reset();
    ```
7. remove content within element in javascript https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
    1. 
    ``` javascript
    document.getElementById(elementID).innerHTML = "";
    ```
8. Local and session storages
    1. webdev simplified https://www.youtube.com/watch?v=GihQAC1I39Q&t=196s
    2. dcode https://www.youtube.com/watch?v=k8yJCeuP6I8
    3. {RhymBil} https://www.youtube.com/watch?v=2hJ1rTANVnk
    4. Kostas @1hr https://www.youtube.com/watch?v=Knv45ECYko4&list=PL0rtm5y5VwgvP69_dNDPxP_ql9IG2iMxn&index=58
    5. store an object https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5
    6. https://stackoverflow.com/questions/3138564/looping-through-localstorage-in-html5-and-javascript#:~:text=localStorage%20is%20an%20Object%20.,just%20like%20any%20other%20Object.
        1. 
        ```javascript
        Object.keys(localStorage).forEach(function(key){
            console.log(localStorage.getItem(key));
        });
        ```
    7. John Desrosiers: Saving Arrays and Object in Local Storage https://www.youtube.com/watch?v=2IHiO90LUEI
9. overflow
    1. html https://stackoverflow.com/questions/24193272/overflow-xhidden-on-mobile-device-not-working
    2. @media https://www.codeproject.com/Questions/989229/overflow-x-hidden-is-not-working-in-mobile
10. new way to declare constructors https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    ```javascript
    // old method of declaring a function
    function Book(author, title, pages, status) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.status = status;
    }
    ```
    ```javascript
    class Book {
        constructor(author, title, pages, status) {
            this.author = author;
            this.title = title;
            this.pages = pages;
            this.status = status;
        }
    }
    ```
11. extend, super
    1. Traversy Media https://www.youtube.com/watch?v=RBLIm5LMrmc
    2. dcode https://www.youtube.com/watch?v=fQ1oNTRdByA

## TEST
```javascript
const theElephantTree = new Book("R.D. Ronald", "The Elephant Tree", 250, "Read");
const requiemForADream = new Book("Hubert Selby Jr.", "Requiem for a Dream", 310, "Read");
const trainspotting = new Book("Irvine Welsh", "Trainspotting", 480, "Unread");
const titanic = new Book("Ed W. Marsh", "James Cameron's Titanic", 300, "Unread");

addBookToLibrary(theElephantTree);
addBookToLibrary(requiemForADream);
addBookToLibrary(trainspotting);
addBookToLibrary(titanic);
```
