import { useEffect, useState } from "react";
import BookCard from "./book-card";
import { Button } from "../ui/button";

const BookList = ({ searchTerm, filter, setWishlistCount }) => {
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
    if (!url) return;
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

  if (loading)
    return (
      <div className="flex justify-center items-end pt-20"> Loading .....</div>
    );

  // book not found
  if (!loading) {
    if (books.length === 0 || filterdBook.length === 0) {
      return (
        <div className="flex justify-center items-end pt-20">
          No book available .....
        </div>
      );
    }
  }

  return (
    <div className="p-8 flex justify-center items-center flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filter
          ? filterdBook.map((book) => <BookCard key={book.id} book={book} />)
          : books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                setWishlistCount={setWishlistCount}
              />
            ))}
      </div>

      {/* pagination */}
      {!loading && (
        <div className="flex justify-center gap-4">
          {previousPage && (
            <Button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => setUrl(previousPage)}
            >
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
