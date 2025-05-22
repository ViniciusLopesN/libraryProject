const library = [];


class Book {
    constructor(name, author, pages, isRead) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.id = crypto.randomUUID();
    }

    toggleRead() {
        this.IsRead = !this.isRead;
    }

}

function addBookToLibrary(name, author, pages, isRead) {
    
    const newBook = new Book(name, author, pages, isRead);


    library.push(newBook);
}

addBookToLibrary('name of the wind', 'patrick rothfuss', '800', true);
addBookToLibrary('wise mans fear', 'patrick rothfuss', '900', true);

console.log(library);

