"use strict";

const readlineSync = require('readline-sync');
const BinarySearchTree = require('./binarySearchTree.js');

const library = new BinarySearchTree();

function displayMenu() {
    console.log('1. Add Book');
    console.log('2. Search Book');
    console.log('3. Lend Book');
    console.log('4. Return Book');
    console.log('5. Check Book Status');
    console.log('6. Print Library Status');
    console.log('7. Exit');
}

while (true) {
    displayMenu();
    const choice = readlineSync.questionInt('Enter your choice: ');

    switch (choice) {
        case 1:
            const bookName = readlineSync.question('Enter book name: ');
            const numCopies = readlineSync.questionInt('Enter number of copies: ');
            library.insert(bookName, numCopies);
            console.log('Book added successfully!');
            break;

        case 2:
            const searchBook = readlineSync.question('Enter book name to search: ');
            const isFound = library.search(searchBook);
            if (isFound)
                console.log('Book found in the library');
            else
                console.log('Book not found in the library');
            break;

        case 3:
            const lendBookName = readlineSync.question('Enter book name to lend: ');
            const lendCopies = readlineSync.questionInt('Enter number of copies to lend: ');
            library.lendBook(lendBookName, lendCopies);
            break;

        case 4:
            const returnBookName = readlineSync.question('Enter book name to return: ');
            const returnCopies = readlineSync.questionInt('Enter number of copies to return: ');
            library.returnBook(returnBookName, returnCopies);
            break;

        case 5:
            const statusBook = readlineSync.question('Enter book name to check status: ');
            library.checkBookStatus(statusBook);
            break;

        case 6:
            console.log('Library Status:');
            library.printLibraryStatus();
            break;

        case 7:
            console.log('Exiting the application.');
            process.exit(0);
            break;

        default:
            console.log('Invalid choice. Please try again.');
    }
}
