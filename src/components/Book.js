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
    <li>
      <h2>{book.title}</h2>
      <p> By {book.author}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </li>
  );
};

export default Book;
