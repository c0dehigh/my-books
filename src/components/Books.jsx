import { getBooks } from "../data/data";
import { NavLink , Outlet } from "react-router-dom";

const Books = () => {
  const books = getBooks();
  return (
    <div style={{ display: "block", justifyContent: "center" }}>
      <nav style={{ padding: "1rem" }}>
        <input type="text" placeholder="search book" />
        {books.map((book) => (
          <NavLink
            style={({isActive}) =>{
                return {
                    display: "block",
                    margin : "1rem 0",
                    color : isActive ? "red" : ""
                }
            } }
            to={`/books/${book.number}`}
            key={book.number}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
        <Outlet/>
    </div>
  );
};

export default Books;
