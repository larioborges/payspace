const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

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

function renderBooks(books) {
  if (!books || books.length == 0) {
    document.querySelector("#books tbody").innerHTML =
      '<td colspan="3">No Books</td>';
    return;
  }

  document.querySelector("#books tbody").innerHTML = books.reduce(
    (html, book) =>
      html +
      `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td></tr>`,
    ""
  );
}

function initRender() {
  renderBooks(books);
}

function search(searchTerm) {
  if (!searchTerm || searchTerm.trim() == "") {
    renderBooks(books);
    return;
  }

  renderBooks(
    books.filter(
      (book) =>
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}

document.querySelector("#searchBooks").onkeyup = (e) => {
  search(e.target.value);
};

document.querySelector("#sortbooks").onchange = (e) => {
  document.querySelector("#searchBooks").value = "";
  switch (e.target.value) {
    case "title_ascending":
      renderBooks(sortByTitleAscending(books));
      break;
    case "title_descending":
      renderBooks(sortByTitleDescending(books));
      break;
    case "author_ascending":
      renderBooks(sortByAuthorAscending(books));
      break;
    case "author_descending":
      renderBooks(sortByAuthorDescending(books));
      break;
  }
};

initRender(sortByTitleAscending(books));
