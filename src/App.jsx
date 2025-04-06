import Header from "./components/header";
import BookList from "./components/book/book-list";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <BookList />
    </div>
  );
}

export default App;
