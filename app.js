const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const readButton = document.querySelector('#bookStatus');
const libraryHolder = document.querySelector('.books');

//controls for the add a book buttton
const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click', function () {
    form.classList.remove('hidden');
    form.classList.add('visible');
})
const closeFormBtn = document.querySelector('#close');
closeFormBtn.addEventListener('click', function () {
    form.classList.remove('visible');
    form.classList.add('hidden');
})

//Controlling the form functionality
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.remove('visible');
    form.classList.add('hidden');
    addBook();
    reset();
    render();
});

let myLibrary = [
    new Book('Harry Potter', 'JK Rowling', 296, true),
    new Book('Lord of the Rings', 'Tolkien', 378, false)
];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBook() {
    myLibrary.push(new Book(title.value, author.value, pages.value, read.checked))
};

function reset() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
};

function render() {
    const container = document.querySelectorAll('.container');
    container.forEach(book => {
        libraryHolder.removeChild(book);
    });

    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
};

function displayBook(book) {
    const container = document.createElement('div');
    const idNum = document.createElement('div');
    const idNum2 = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');

    idNum.classList.add('topBanner');

    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1)
        render();
    })

    idNum.append(idNum2);
    idNum.append(deleteBtn);

    container.classList.add('container');
    idNum2.classList.add('idNum');
    idNum2.textContent = `#${(myLibrary.indexOf(book) + 1)}`;

    title.classList.add('bookTitle');
    title.textContent = book.title;

    author.classList.add('bookAuthor');
    author.textContent = book.author;

    pages.classList.add('bookPages');
    pages.textContent = `Pages: ${book.pages}`;

    if (book.read) {
        read.classList.add('buttonRead');
        read.textContent = 'Read';
    } else {
        read.classList.add('buttonUnread');
        read.textContent = 'Unread';
    }

    read.addEventListener('click', () => {
        book.read = !book.read;
        render();
    })

    container.append(idNum);
    container.append(title);
    container.append(author);
    container.append(pages);
    container.append(read);
    libraryHolder.append(container);
}

render();
