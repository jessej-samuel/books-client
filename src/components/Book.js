import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Book = ({ book, id }) => {
  return (
    <li className="w-[200px] bg-cover bg-center rounded">
      <Link to={`/book/${book.id}`} className="h-full w-[200px] inline-block">
        <img
          src={book.image_link}
          alt={book.title + " by " + book.author}
          className="h-80  rounded-lg"
        />
        <h3 className="text-lg">{book.title}</h3>
        <p className="text-black/50 text-sm">by {book.author}</p>
        <ReactStars
          count={5}
          size={24}
          isHalf={true}
          value={Math.random() * 5}
          edit={false}
          emptyIcon={<i className="fa fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        />
        <p className="text-red-500 text-sm">$10.00</p>
      </Link>
    </li>
  );
};

export default Book;
