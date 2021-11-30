const bookStore  = require('./bookServices');


test("add a book to the store", () => {
    expect(bookStore.addBook(["The Great Gatsby"])).toContainEqual(["The Great Gatsby"]);
})
test("view available books in the store", () => {
    expect(bookStore.viewAvailableBooks()).toContainEqual(["The Great Gatsby"]);
})  

test("donate a book to the store", () => {
    expect(bookStore.donateBook(["We are not here to play"])).toContainEqual(["We are not here to play"]);
})

test("borrow a book from the store", () => {
    // console.log(bookStore.viewBorrowedBooks);
    expect(bookStore.viewBorrowedBooks(["Homely"])).toEqual(["Homely"]);
})

test("return a book to the store", () => {
//    console.log(bookStore.viewReturnedBooks(["Homely"]));
    expect(bookStore.viewReturnedBooks(["Eloquent JavaScript"])).toEqual(["Eloquent JavaScript"]);

})