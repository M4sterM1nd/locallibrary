function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const allBooks = [];
  allBooks.push(books.filter((book) => book.borrows[0].returned === false));
  allBooks.push(books.filter((book) => book.borrows[0].returned === true));
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
//   let borrowsArray = [];
//   let bookBorrowers = {};
//   // map, same size array, different shape
//   book.borrows.map((borrow) => {
//     // iterate over each borrow transaction
//     // get account by id, loop over accounts
//     accounts.forEach((account) => {
//       if (borrow.id === account.id){
//         // return object with id, returned, and rest of account data
//         bookBorrowers = { id:borrow.id,
//                           returned:borrow.returned,
//                           picture:account.picture,
//                           age:account.age,
//                           name:account.name,
//                           company:account.company,
//                           email:account.email,
//                           registered:account.registered,
//                         };
//                         borrowsArray.push(bookBorrowers);
//                         console.log(borrowsArray);
//     }
//   })
// })
//   borrowsArray.slice(0, 9);
//   return borrowsArray;
// }
const borrowers = book.borrows.map(({id, returned}) => {
const account = accounts.find((account) => account.id === id);
return {...account, returned};
});
return borrowers.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
