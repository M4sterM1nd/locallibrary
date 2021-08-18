function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  return borrowed.length;
}

// helper function, takes in an object
function _sortObjByValues(obj) {
  // get keys of the object in an array
  const keys = Object.keys(obj);
  // sort the keys alphabetically
  return keys.sort((keyA, keyB) =>
  obj[keyA] > obj[keyB] ? -1 : 1)
}
function getMostCommonGenres(books) {
  // set accumulator array
  // sort by most popular 5 genres
  // name key; count key

  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]){
      acc[genre] += 1;
    } else {
      acc[genre] = 1
    }  
    return acc;
  }, {});
  const sortCount = _sortObjByValues(count);
  return sortCount.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

// function getMostPopularBooks(books) {
//   // check each book
//   // count the number of borrows
//   // borrows.length
//   // compare rentals with each book
//   // sort books by count
//   books.sort((bookA, bookB) => bookA.borrows.length - bookB.borrows.length);
//   const top5Books = [];
//   top5Books = books.slice(0, 5);
//   // a.count - b.count
//   // slice the first 5 books from array
//   // create new objects
//   // push them into array
//   const mostPopularBooks = [];
//   const obj = {};
//   for (const book of top5Books){
//     obj[name] = book.title;
//     obj[count] = book.borrows.length;
//     mostPopularBooks.push(obj)
//   }
  function getMostPopularBooks(books){
    // use map to iterate over books
    // create new popularBook object
    // store the new book in results
    const results = books.map((book) => {
      const popularBook = {
        name:book.title,
        count:book.borrows.length
      }
      return popularBook;
    })
    // sort the new books, slice the top 5
    return results.sort((titleA, titleB) => titleB.count - titleA.count).slice(0, 5)
  }



function getMostPopularAuthors(books, authors) {
  // filter all books by author
  // map the books to the author
  // borrows.length for count of checkouts
  const popularAuthors = [];

  const results = authors.forEach(author => {
    authorBorrowTracker = { name: "",
                          count: 0, }; // initialize object to track number of borrows
    books.forEach(book => {
      if (author.id === book.authorId){

        authorBorrowTracker.count += book.borrows.length; // use book.borrow.length and add it to the tracker
      }
    });
    authorBorrowTracker.name = author.name.first + " " + author.name.last;
    popularAuthors.push(authorBorrowTracker);
  });

  return popularAuthors.sort((popularAuthorA, popularAuthorB) => {
    return popularAuthorB.count - popularAuthorA.count
  }).slice(0, 5);
}






  //   const authorsBooks = {};
//   const results = authors.forEach((author) => {
//     books.map((book) => {
//       authorsBooks[title] = book.title;
//       authorsBooks[authorName] = author.name.first + " " + author.name.last;
//       authorsBooks[checkouts] = book.borrows.length;
//   })
//   console.log(authorsBooks);
// })

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
