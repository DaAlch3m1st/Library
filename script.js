// function Book (title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;

//     this.sayBook = function() {
//         console.log(`The "${title}" by ${author}, with ${pages} pages`);
//     };
// }

// const book1 = new Book ('1984', 'George Orwell', '328');

// console.log(Object.getPrototypeOf(book1));
// book1.sayBook();

const myLibrary = [];

console.log(myLibrary.length === 0, "We dont have values for now"); // Debería mostrar true

const bookName = document.getElementById('bookTitle');
const authorName = document.getElementById('author');
const numberPage = document.getElementById('pages');
const button = document.getElementById('addBook');


function BookTest(title, author, pages) {
    this.title = title;  
    this.author = author;
    this.pages = pages;
    
    this.info = function() {
        // const readStatus = this.read ? "read" : "not read yet";
        console.log(`${this.title} by ${this.author} with ${this.pages} pages`);
    };
}

button.addEventListener('click', function() {
    const book = bookName.value.trim();
    const author = authorName.value.trim();
    const pages = numberPage.value.trim();
    const x = new BookTest (book,author,pages);

    myLibrary.push(x.info());
    console.log(myLibrary);
    console.log(myLibrary.includes(x.info()), "If the display it's true, the values that I push are inside the array");
})
