import { getBooks } from "../data/data";
import { Link } from "react-router-dom";

const Books = () => {
  const books = getBooks();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <nav style={{ padding: "1rem" }}>
        <input type="text" placeholder="search book" />
        {books.map((book) => (
          <Link
            style={{ display: "block" }}
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Books;
