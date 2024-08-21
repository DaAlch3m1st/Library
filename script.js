const myLibrary = [];

const bookName = document.getElementById('bookTitle');
const authorName = document.getElementById('author');
const numberPage = document.getElementById('pages');
const button = document.getElementById('addBook');
const containerBook = document.getElementById('bookContainer');
const addBooksDialog = document.getElementById('addBtn');
const closeTab = document.getElementById('closeModal');
const modal = document.getElementById('modal');

function openModal() {
    addBooksDialog.addEventListener('click', function() {
       modal.classList.add('modal--show');
    })
}

function closeModal() {
    closeTab.addEventListener('click', function() {
        modal.classList.remove('modal--show');
    })
}

openModal();
closeModal();

function Book(book, author, pages) {
    this.book = book;  
    this.author = author;
    this.pages = pages;
    
    this.info = function() {
        containerBook.innerHTML = '';
        console.log(`${book} ${author} ${pages}`);
        const bookHeader = `<h1>${book}</h1>`;
        const authorHeader = `<h2>${author}</h2>`;
        const pagePara = `<p>${pages}</p>`;
        const readBtn = `<button type="button" class="read-btn"><span>Read</span></button>`;
        const div = `
        <div class="book-cards">
          ${bookHeader}
          ${authorHeader}
          ${pagePara}
          ${readBtn}
        </div>
      `;
      containerBook.innerHTML = div;
    };
}

const book1 = new Book("book name", "author name", "number of pages: 999");
book1.info();

function displayBooks() {
    containerBook.innerHTML = '';

    myLibrary.forEach(library => {
        const bookHeader = `<h1><strong>Book name:</strong> ${library.book}</h1>`;
        const authorHeader = `<h2><strong>By:</strong> ${library.author}</h2>`;
        const pagePara = `<p><strong>Number of pages:</strong> ${library.pages}</p>`;
        const readBtn = `<button type="button" class="read-btn"><span>Read</span></button>`;
        const div = `
        <div class="book-cards">
          ${bookHeader}
          ${authorHeader}
          ${pagePara}
          ${readBtn}
        </div>
      `;
      containerBook.innerHTML += div;
    });
    document.querySelectorAll('.read-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            btn.classList.toggle('unread-btn');
            btn.classList.toggle('read-btn');
        })
    });
}

function addBookToLibrary() {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        if (bookName.value != '' && authorName.value != '' && numberPage.value != '') {
            const book = bookName.value.trim();
            const author = authorName.value.trim();
            const pages = numberPage.value.trim();
            const pushBooksInfo = new Book(book, author, pages);

            myLibrary.push(pushBooksInfo);
            displayBooks();
            modal.classList.remove('modal--show');

        } else {
            alert('invalid inputs');
        }
    })
}

addBookToLibrary();