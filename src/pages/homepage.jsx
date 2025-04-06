import React, { useState } from "react";
import BookList from "../components/book/book-list";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  let debounceTimer;
  const handleSearch = (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, [500]);
  };

  return (
    <>
      <div className="px-22 pt-4 sm:pt-4 flex justify-center">
        <input
          type="text"
          placeholder="Search books..."
          value={undefined}
          onChange={handleSearch}
          className="w-full sm:max-w-[300px] p-2 border border-gray-300 rounded"
        />
      </div>
      <BookList searchTerm={searchTerm} />
    </>
  );
};

export default HomePage;
