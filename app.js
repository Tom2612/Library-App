const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const readButton = document.querySelector('#bookStatus');
const libraryHolder = document.querySelector('.books');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
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
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');

    container.classList.add('container');
    idNum.classList.add('idNum');

    title.classList.add('bookTitle');
    title.textContent = book.title;

    author.classList.add('bookAuthor');
    author.textContent = book.author;

    pages.classList.add('bookPages');
    pages.textContent = book.pages

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