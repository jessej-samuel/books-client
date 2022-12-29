import BookList from "../components/BookList";
import NewBook from "../components/NewBook";

function App() {
  return (
    <div className="mx-auto border max-w-md sm:max-w-xl md:max-w-3xl xl:max-w-6xl">
      <BookList />
      <NewBook />
    </div>
  );
}

export default App;
