import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import BookList from "./components/book/book-list";
import BookDetailsPage from "./pages/book-details";
import Wishlist from "./pages/wishlist";

function App() {
  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
