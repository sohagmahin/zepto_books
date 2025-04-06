import { useEffect, useState } from "react";
import BookCard from "./book-card";
import { Button } from "../ui/button";

const BookList = ({ searchTerm, filter }) => {
  const [books, setBooks] = useState([]);
  const [filterdBook, setFilteredBook] = useState([]);
  const [loading, setLoading] = useState(true);

  const [url, setUrl] = useState("https://gutendex.com/books?page=1");
  const [nextPage, setNextPage] = useState(false);
  const [previousPage, setPreviousPage] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;
    setUrl(`https://gutendex.com/books?search=${searchTerm}`);
  }, [searchTerm]);

  useEffect(() => {
    if (!books) return;

    const updatedBooks = books.filter((book) => {
      let match = book?.subjects.filter((subject) =>
        subject?.toLowerCase().includes(filter.toLowerCase())
      );
      return match.length > 0;
    });
    setFilteredBook(updatedBooks);
  }, [filter, books]);

  useEffect(() => {
    setLoading(true);
    setBooks([]);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // parse the data to get the books
        const books = data.results.map((book) => ({
          id: book?.id,
          title: book?.title,
          author: book?.authors[0]?.name,
          image: book?.formats["image/jpeg"],
          subjects: book?.subjects,
        }));

        setBooks(books);
        setNextPage(data?.next);
        setPreviousPage(data?.previous);
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="p-8 flex justify-center items-center flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Loading  */}

        {loading && <div> Loading .....</div>}

        {filter
          ? filterdBook.map((book) => <BookCard key={book.id} book={book} />)
          : books.map((book) => <BookCard key={book.id} book={book} />)}

        {/* No books found */}
        {!loading && books.length === 0 && <div>No books found</div>}
      </div>

      {/* pagination */}
      {!loading && (
        <div
          className="flex justify-center gap-4"
          onClick={() => setUrl(previousPage)}
        >
          {previousPage && (
            <Button className="bg-blue-500 text-white p-2 rounded-md">
              Previous Page
            </Button>
          )}

          {nextPage && (
            <Button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => setUrl(nextPage)}
            >
              Next Page
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default BookList;
