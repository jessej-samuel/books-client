import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookApi from "../api/BookApi";
import useStore from "../hooks/useStore";

const BookPage = () => {
  const update = useStore((state) => state.update);
  const params = useParams();
  const [data, setData] = useState({});

  const getData = async () => {
    const res = await BookApi.get(`/book/${params.id}`);
    return res.data;
  };

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .finally(update);
  }, [getData, update]);

  // Utility function for deleting a book
  const onDelete = async () => {
    const res = await BookApi.delete("/books", { data: { id: data.id } });
    update();
    console.log(res.data);
  };

  // Utitlity function for editing a book's data
  const onEdit = async () => {
    const res = await BookApi.put("/books", {
      ...data,
      title: data.title + " [edited]",
    });
    update();
    console.log(res.data);
  };

  return (
    <>
      <h2 className="text-3xl font-bold max-w-full">
        {data.title} <span className="text-sm font-normal text-black/60">#{data.id}</span>
      </h2>

      <p className="text-base text-neutral-500"> By {data.author}</p>
      <img src={data.image_link} className="w-48" />
      <button
        onClick={() => onDelete(data.id)}
        className="bg-red-500 text-white py-1 px-2 rounded"
      >
        Delete
      </button>
      <button
        onClick={() => onEdit(data.id)}
        className="bg-blue-500 text-white py-1 px-2 rounded"
      >
        Edit
      </button>
    </>
  );
};

export default BookPage;
