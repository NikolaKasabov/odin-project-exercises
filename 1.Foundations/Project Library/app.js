const showModalBtn = document.querySelector('.show-modal-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('.modal form');
const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const pagesEl = document.getElementById('pages');
const isReadEl = document.getElementById('isRead');
const submitBtn = document.querySelector('.submit-btn');
const cancelBtn = document.querySelector('.cancel-btn');

let myLibrary = [];

addBookToLibrary('title1', 'author1', 45, true);
addBookToLibrary('title2', 'author2', 56, false);
addBookToLibrary('title3', 'author3', 145, true);
addBookToLibrary('title4', 'author4', 450, false);

updateBooksUi();

showModalBtn.addEventListener('click', () => {
  showModal();
});

overlay.addEventListener('click', () => {
  hideModal();
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const title = titleEl.value;
  const author = authorEl.value;
  const pages = parseInt(pagesEl.value);
  const isRead = isReadEl.value === 'true' ? true : false;
  addBookToLibrary(title, author, pages, isRead);
  updateBooksUi();
  hideModal();
});

cancelBtn.addEventListener('click', () => {
  hideModal();
});

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.getInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read' : 'not read yet'}.`
  }
}

Book.prototype.changeReadStatus = function () {
  this.isRead = !this.isRead;
}

function updateBooksUi() {
  booksContainer.innerHTML = '';
  myLibrary.forEach((el, index) => {
    const book = document.createElement('div');
    book.classList.add('book');
    book.dataset.id = index;
    book.innerHTML = `
      <p>Title: <span class="title">${el.title}</span></p>
      <p>Author: <span class="author">${el.author}</span></p>
      <p>Pages: <span class="pages">${el.pages}</span></p>
      <button class="change-read-status-btn">${el.isRead ? 'Read' : 'Not read'}</button>
      <button class="delete-book-btn">Delete book</button>
    `;

    // Change book read status button click listener
    book.querySelector('.change-read-status-btn').addEventListener('click', ev => {
      const bookIndex = parseInt(ev.target.parentElement.dataset.id);
      // myLibrary[bookIndex].isRead = !myLibrary[bookIndex].isRead;   // old way
      myLibrary[bookIndex].changeReadStatus();   // new way
      updateBooksUi();
    });

    // Delete book button click listener
    book.querySelector('.delete-book-btn').addEventListener('click', ev => {
      const bookIndex = parseInt(ev.target.parentElement.dataset.id);
      myLibrary = myLibrary.filter((el, index) => index !== bookIndex);
      updateBooksUi();
    });

    booksContainer.appendChild(book);
  });
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function showModal() {
  overlay.classList.add('active');
  modal.classList.add('active');
}

function hideModal() {
  overlay.classList.remove('active');
  modal.classList.remove('active');
  form.reset();
}
