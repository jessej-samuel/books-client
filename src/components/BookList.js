import Book from "./Book";
import BookApi from "../api/BookApi";
import { useEffect, useRef, useState } from "react";
import useStore from "../hooks/useStore";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const flag = useStore((state) => state.flag);
  const reset = useStore((state) => state.reset);

  const carouselRef = useRef();

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
    <>
      <h2 className="font-medium text-xl mb-2 ml-4">Books</h2>
      <div
        className={`grid grid-cols-3 items-center`}
        style={{ gridTemplateColumns: "48px auto 48px" }}
      >
        <button
          className=" h-full rounded-l"
          onClick={() => carouselRef.current.scrollBy(-200, 0)}
        >
          &lt;
        </button>
        <ul
          className="w-full  flex gap-3 overflow-x-scroll scroll-smooth"
          ref={carouselRef}
        >
          {books.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
        </ul>
        <button
          className=" h-full rounded-r"
          onClick={() => carouselRef.current.scrollBy(200, 0)}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default BookList;
