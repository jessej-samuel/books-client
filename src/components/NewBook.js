import { useState } from "react";
import BookApi from "../api/BookApi";
import useStore from "../hooks/useStore";

const NewBook = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
  });

  const update = useStore((state) => state.update);

  const postBook = async () => {
    await BookApi.post("/books", data);
    update(); // zustand state for setting flag to 1
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postBook().finally(() =>
      setData({
        title: "",
        author: "",
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type={"text"}
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type={"text"}
          value={data.author}
          onChange={(e) => setData({ ...data, author: e.target.value })}
        />
      </div>
      <input type={"submit"} value="Create new book" />
    </form>
  );
};

export default NewBook;
