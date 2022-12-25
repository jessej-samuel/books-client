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
    if (data.title && data.author)
      postBook().finally(() =>
        setData({
          title: "",
          author: "",
        })
      );
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-black/10 p-1 grid grid-cols-4 grid-flow-row gap-1"
    >
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type={"text"}
        value={data.title}
        className="col-span-3"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />

      <label htmlFor="author">Author</label>
      <input
        id="author"
        type={"text"}
        value={data.author}
        className="col-span-3"
        onChange={(e) => setData({ ...data, author: e.target.value })}
      />

      <input
        type={"submit"}
        value="Create new book"
        className="bg-green-400 text-white py-1 px-2 rounded col-span-full"
      />
    </form>
  );
};

export default NewBook;
