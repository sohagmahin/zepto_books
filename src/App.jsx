import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import BookList from "./components/book/book-list";
import BookDetailsPage from "./pages/book-details";
import Wishlist from "./pages/wishlist";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  let debounceTimer;
  const handleSearch = (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, [500]);
  };

  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Header />
        <div className="px-22 pt-4 sm:pt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search books..."
            value={undefined}
            onChange={handleSearch}
            className="w-full sm:max-w-[300px] p-2 border border-gray-300 rounded"
          />
        </div>
        <Routes>
          <Route path="/" element={<BookList searchTerm={searchTerm} />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
