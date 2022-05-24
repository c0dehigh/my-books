import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Books from "./components/Books";
import Book from "./components/Book";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/books" element={<Books />}></Route>
           <Route path="/books/:bookId" element={<Book/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
