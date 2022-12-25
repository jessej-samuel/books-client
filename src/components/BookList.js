import Book from "./Book";
import BookApi from "../api/BookApi";
import { useEffect, useState } from "react";
import useStore from "../hooks/useStore";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const flag = useStore((state) => state.flag);
  const reset = useStore((state) => state.reset);

  // utility function to fetch books
  const fetchBooks = async () => {
    const res = await BookApi.get("/books");
    setBooks(res.data);
  };

  // Fetch books when zustand update flag changes
  useEffect(() => {
    if (flag === 1) fetchBooks().then(() => reset());
  }, [flag, reset]);

  return (
    <ul>
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </ul>
  );
};

export default BookList;
