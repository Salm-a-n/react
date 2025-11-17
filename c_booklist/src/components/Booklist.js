import React, { useState } from "react";
import Navbar from "./Navbar";

function Booklist() {
  const [books, setBooks] = useState([
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    date: "1925-04-10",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    date: "1960-07-11",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    date: "1949-06-08",
  },
]);


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  // Add book
  const handleAddBook = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Book name is required ");
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: title,
      author: author,
      date: publishDate,
    };

    setBooks([...books, newBook]);

    // Clear fields
    setTitle("");
    setAuthor("");
    setPublishDate("");
  };

  // Delete book
  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  // Edit start
  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditedTitle(book.title);
  };

  // Save edited value
  const handleSave = () => {
    if (editedTitle.trim() === "") {
      alert("Book name cannot be empty");
      return;
    }

    const updated = books.map((book) =>
      book.id === editingId ? { ...book, title: editedTitle } : book
    );

    setBooks(updated);
    setEditingId(null);
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null);
    setEditedTitle("");
  };

  // Filter books based on search
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
    <div> <Navbar/> </div><br/>

      <h2>📚 Book List Management App</h2>

      {/* Add Book Form */}
      <form onSubmit={handleAddBook} className="mb-4">

        <label>Book Title:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Author Name:</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Publish Date:</label>
        <input
          type="date"
          className="form-control"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
        />

        <button className="btn btn-success mt-3">Add Book</button>
      </form>

      {/* Search Field */}
      <div className="mb-3">
        <label>Search Books:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Book Table */}
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Book Title</th>
            <th>Author Name</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredBooks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No books found
              </td>
            </tr>
          ) : (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>

                <td>
                  {editingId === book.id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  ) : (
                    book.title
                  )}
                </td>

                <td>{book.author}</td>
                <td>{book.date}</td>

                <td>
                  {editingId === book.id ? (
                    <>
                      <button className="btn btn-primary" onClick={handleSave}>
                        Save
                      </button>{" "}
                      <button className="btn btn-secondary" onClick={handleCancel}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(book)}
                      >
                        Edit
                      </button>{" "}
                      <button   
                        className="btn btn-danger"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Booklist;
