class Book {
    // Implementation here
    constructor(title, author, isbn, isBorrowed) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isBorrowed = isBorrowed;
    }
    borrow() {
        this.isBorrowed = true;
    }
    returnBook() {
        this.isBorrowed = false;
    }
}

class Member {
    // Implementation here
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {}
    returnBook(book) {}
}

class Library {
    // Implementation here
    constructor() {
        this.books = [];
        this.members = [];
    }

    borrowBook(book) {}
    returnBook(book) {}
}

// Example Usage
const library = new Library();
const book1 = new Book("1984", "George Orwell", "1234567890", false);
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321", false);

library.addBook(book1);
library.addBook(book2);

const member = new Member("John Doe", "M001");
library.addMember(member);

library.borrowBook("M001", "1234567890"); // John Doe borrows 1984
library.returnBook("M001", "1234567890"); // John Doe returns 1984
