import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import BookList from "./components/book/book-list";
import BookDetailsPage from "./pages/book-details";
import Wishlist from "./pages/wishlist";
import HomePage from "./pages/homepage";
import { useState } from "react";

function App() {
  const [wishlistCount, setWishlistCount] = useState(
    JSON.parse(localStorage.getItem("wishlist") || "[]").length || 0
  );

  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Header wishlistCount={wishlistCount} />
        <Routes>
          <Route
            path="/"
            element={<HomePage setWishlistCount={setWishlistCount} />}
          />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route
            path="/wishlist"
            element={<Wishlist setWishlistCount={setWishlistCount} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
