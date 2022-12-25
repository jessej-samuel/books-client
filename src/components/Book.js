import BookApi from "../api/BookApi";
import useStore from "../hooks/useStore";

const Book = ({ book }) => {
  const update = useStore((state) => state.update);

  const onDelete = async (id) => {
    const res = await BookApi.delete("/books", { data: { id: id } });
    update();
    console.log(res.data);
  };

  return (
    <li className="border rounded mb-1 last:mb-0 last:mt-1 p-1 flex flex-col gap-2">
      <h2 className="text-lg max-w-full">{book.title}</h2>
      <p className="text-sm text-neutral-500"> By {book.author}</p>
      <button
        onClick={() => onDelete(book.id)}
        className="bg-red-500 text-white py-1 px-2 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default Book;
