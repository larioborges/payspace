import "./Books.css";
import React from "react";

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
function sortByTitleAscending(books) {
  return books.sort((a, b) =>
    compare(a.title.toLowerCase(), b.title.toLowerCase())
  );
}

function sortByTitleDescending(books) {
  return sortByTitleAscending(books).reverse();
}

function sortByAuthorAscending(books) {
  return books.sort((a, b) =>
    compare(a.author.toLowerCase(), b.author.toLowerCase())
  );
}

function sortByAuthorDescending(books) {
  return sortByAuthorAscending(books).reverse();
}

function sortBooks(books, sortOrder) {
  switch (sortOrder) {
    case "title_ascending":
      return sortByTitleAscending(books);
    case "title_descending":
      return sortByTitleDescending(books);
    case "author_ascending":
      return sortByAuthorAscending(books);
    case "author_descending":
      return sortByAuthorDescending(books);
    default:
      return sortByTitleAscending(books);
  }
}

function applySearch(books, searchTerm) {
  if (!searchTerm || searchTerm.trim() === "") {
    return books;
  }

  return books.filter(
    (book) =>
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

const Books = ({ books, searchTerm, sortOrder }) => {
  const displayedBooks = applySearch(sortBooks(books, sortOrder), searchTerm);

  return (
    <table className="books">
      <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Year</td>
        </tr>
      </thead>
      <tbody>
        {!displayedBooks || displayedBooks.length === 0 ? (
          <tr>
            <td colSpan="3">No Books</td>
          </tr>
        ) : (
          displayedBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Books;
