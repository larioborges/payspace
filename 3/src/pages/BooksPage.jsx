import "./BooksPage.css";
import Books from "../components/Books";
import React, { useState } from "react";

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("title_ascending");

  return (
    <div className="books-page">
      <h1>Books</h1>

      <div className="sort">
        <label htmlFor="sortbooks">Sort by:</label>

        <select name="sortbooks" onChange={(e) => setSortOrder(e.target.value)}>
          <option value="title_ascending">Title ascending</option>
          <option value="title_descending">Title descending</option>
          <option value="author_ascending">Author ascending</option>
          <option value="author_descending">Author descending</option>
        </select>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Books books={books} sortOrder={sortOrder} searchTerm={searchTerm} />
    </div>
  );
};

export default BooksPage;
