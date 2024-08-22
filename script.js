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
        const header = `<h1>Book example</h1>`
        const bookHeader = `<h1><em>Book:</em> <strong>${book}</strong></h1>`;
        const authorHeader = `<h2><em>By:</em> <strong>${author}</strong></h2>`;
        const pagePara = `<h3><em>Number of pages:</em> <strong>${pages}</strong></h3>`;
        const readBtn = `<button type="button" class="read-btn"><span>Read</span></button>`;
        const readStatus = `<h4><em>Read Status:</em> <b>No</b></h4>`
        const div = `
        <div class="book-cards">
          ${header}  
          ${bookHeader}
          ${authorHeader}
          ${pagePara}
          ${readStatus}
          ${readBtn}
        </div>
      `;
      containerBook.innerHTML = div;
    };
}

const book1 = new Book("1984", "George Orwell", "282");
book1.info();

function displayBooks() {
    containerBook.innerHTML = '';

    myLibrary.forEach(library => {
        const bookHeader = `<h1><em>Book: </em> <strong>${library.book}</strong></h1>`;
        const authorHeader = `<h2><em>By:</em> <strong>${library.author}</strong></h2>`;
        const pagePara = `<h3><em>Number of pages:</em> <strong>${library.pages}</strong></h3>`;
        const readBtn = `<button type="button" class="read-btn"><span>Read</span></button>`;
        const readStatus = `<h4><em>Read Status:</em> <b>No</b></h4>`
        const div = `
        <div class="book-cards">
          ${bookHeader}
          ${authorHeader}
          ${pagePara}
          ${readStatus}
          ${readBtn}
        </div>
      `;
      containerBook.innerHTML += div;
    });
    document.querySelectorAll('.book-cards').forEach(bookCard => {
        const btn = bookCard.querySelector('.read-btn');

        btn.addEventListener('click', function() {
            btn.classList.toggle('unread-btn');
            btn.classList.toggle('read-btn');
            
            // Alterna el borde superior del contenedor
            if (btn.classList.contains('unread-btn')) {
                bookCard.style.borderTop = '16px solid red';
                btn.querySelector('span').textContent = 'Unread';
                btn.querySelector('b').textContent = 'No';
            } else {
                bookCard.style.borderTop = '16px solid green';
                btn.querySelector('span').textContent = 'Read';
                btn.querySelector('b').textContent = 'Yes';
            }
        });
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
            bookName.value = '';
            authorName.value = '';
            numberPage.value = '';

        } else {
            alert('invalid inputs');
        }
    })
}

addBookToLibrary();