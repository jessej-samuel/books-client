import BookApi from "../api/BookApi";
import useStore from "../hooks/useStore";

const Book = ({ book }) => {
  const update = useStore((state) => state.update);

  // Utility function for deleting a book
  const onDelete = async () => {
    const res = await BookApi.delete("/books", { data: { id: book.id } });
    update();
    console.log(res.data);
  };

  // Utitlity function for editing a book's data
  const onEdit = async () => {
    const res = await BookApi.put("/books", {
      ...book,
      title: book.title + " [edited]",
    });
    update();
    console.log(res.data);
  };

  return (
    <li className="border w-56 h-96 rounded mb-1 last:mb-0 last:mt-1 p-1 flex flex-col gap-2">
      <h2 className="text-lg max-w-full">{book.title}</h2>
      <p className="text-sm text-neutral-500"> By {book.author}</p>
      <button
        onClick={() => onDelete(book.id)}
        className="bg-red-500 text-white py-1 px-2 rounded"
      >
        Delete
      </button>
      <button
        onClick={() => onEdit(book.id)}
        className="bg-blue-500 text-white py-1 px-2 rounded"
      >
        Edit
      </button>
    </li>
  );
};

export default Book;
