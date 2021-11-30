// NAME: AZEEZ GANIYAT OLAJUMOKE
// WEEK 6_TASK: Devlop a service for a book lending platform
// DESIGN PATTERN USED: REAVEALING MODULE DESIGN PATTERN

const bookStore = (function () {
  let bookList = ["Eloquent JavaScript", "To kill a Mockingbird", "Don't be sad", "War and Peace"]

  let borrowedBooks = ["Homely"];
  let returnedBooks = ["Eloquent JavaScript"];
  
  return {
    addBook: addBook,
    donateBook: donateBook,
    lendBook: lendBook,
    returnBook: returnBook,
    viewReturnedBooks: viewReturnedBooks,
    viewAvailableBooks: viewBooks,
    viewBorrowedBooks: viewBorrowedBooks,
  };

  function addBook(book) {
    bookList.push(book);
    return bookList;
  }

  function viewBooks() {
    return bookList;
  }

  function donateBook(bookName) {
    bookList.push(bookName);
    return bookList;
  }

  function viewBorrowedBooks() {
    return borrowedBooks
  }

  function viewReturnedBooks() {
    return returnedBooks
  }

  function lendBook(bookName) {
    if (!bookList.includes(bookName)) {
      console.log('\n Sorry! The Book is not in store')
      return console.log('Here are the available books: ', viewBooks())
    } else {
      bookList = bookList.filter((book) => {
        return book !== bookName
      })
      borrowedBooks.push(bookName)
      console.log('\n You have successfully borrowed a book from the store and it\'s no longer available \n')
    }

  }

  function returnBook(bookName) {
    if (!borrowedBooks.includes(bookName)) {
      console.log("Sorry! the book does not belong to the store")
    } else {
      borrowedBooks = borrowedBooks.filter((book) => book !== bookName)
      bookList.push(bookName)
      console.log('\n You have successfully returned a book to the store and it has been added to the list of available books \n')
     
    }
  }
})();

bookStore.addBook("The Great Gatsby");
bookStore.donateBook('We are not here to play');
// console.log(bookStore.viewAvailableBooks());

// bookStore.lendBook('Can a bridge build itself');

bookStore.lendBook("Eloquent JavaScript");
// console.log("List of Borrowed Books: ", bookStore.viewBorrowedBooks())

bookStore.returnBook('Eloquent JavaScript');
console.log(bookStore.viewAvailableBooks());


module.exports = bookStore;
