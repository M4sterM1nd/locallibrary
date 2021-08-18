function findAccountById(accounts, id) {
  return (foundID = accounts.find((account) => account.id === id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last < accountB.name.last ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let bookRentalCount = 0;
  // set counter
  // filter books iterates over each book; maybe try forEach instead
  // loop through book.borrows array
  // count the rentasls in the book.borrows array
  let rentalID = account.id;
  let bookRentals = books.filter((book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === rentalID) {
        bookRentalCount += 1;
      }
    }
  });
  return bookRentalCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    const recent = book.borrows[0];
    return !recent.returned && recent.id === account.id;
  })
  .map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
}
  
  
  
  
  
  
  // const checkedOutInfo = {};
  
  // // filter books by currently checked out;
  // books.forEach((book) => {
  //   if (book.borrows[0].returned === false && account.id === book.borrows[0].id){
  //     let authorOfBook = authors.find((author) => author.id === book.authorId);
  //     console.log(authorOfBook);
  //     {...books, authorOfBook}
  //     // checkedOutInfo[id] = account.id;
  //     // checkedOutInfo[book] = book;
  //     // checkedOutInfo[author] = authorOfBook;
  //     // checkedOutInfo[rental] = book.borrows[0];
  //   }
  // })
  // // if book.borrows[0].returned === false &&
  // // check if account.id matches book.borrows[0].id
  // // author id in book.authorId
  // // find author in authors by author.id
  // // add author object to book 
  // return checkedOutInfo;

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
