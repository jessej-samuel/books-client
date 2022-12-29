import { useState } from "react";
import BookApi from "../api/BookApi";
import useStore from "../hooks/useStore";

const NewBook = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    image_link: "",
  });

  const update = useStore((state) => state.update);

  const postBook = async () => {
    await BookApi.post("/books", data);
    update(); // zustand state for setting flag to 1
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.title && data.author && data.image_link)
      postBook().finally(() =>
        // Reset data state
        setData({
          title: "",
          author: "",
          image_link: "",
        })
      );
  };

  return (
    <section className="mt-8 px-4">
      <h2 className="font-medium text-xl mb-2">Add a new book?</h2>
      <form
        onSubmit={onSubmit}
        className="p-1 grid grid-cols-4 grid-flow-row gap-2 items-center"
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type={"text"}
          value={data.title}
          className="col-span-3 py-2 px-1 rounded bg-black/10"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          type={"text"}
          value={data.author}
          className="col-span-3  rounded py-2 px-1 bg-black/10"
          onChange={(e) => setData({ ...data, author: e.target.value })}
        />

        <label htmlFor="imageLink">Image Link</label>
        <input
          id="imageLink"
          type={"text"}
          value={data.image_link}
          className="col-span-3 py-2 px-1 rounded bg-black/10"
          onChange={(e) => setData({ ...data, image_link: e.target.value })}
        />

        <input
          type={"submit"}
          value="Create new book"
          className="bg-green-400 text-white py-1 px-2 rounded col-span-full"
        />
      </form>
    </section>
  );
};

export default NewBook;
