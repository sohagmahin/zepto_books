import { useEffect, useState } from "react";
import BookCard from "./book-card";
import { Button } from "../ui/button";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [url, setUrl] = useState("https://gutendex.com/books?page=1");
  const [nextPage, setNextPage] = useState(false);
  const [previousPage, setPreviousPage] = useState(false);

  useEffect(() => {
    console.log(url);
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
        }));

        setBooks(books);
        setNextPage(data?.next);
        setPreviousPage(data?.previous);
        setLoading(false);
      });
  }, [url]);

  console.log(nextPage);

  return (
    <div className="p-14 flex justify-center items-center flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Loading  */}

        {loading && <div> Loading .....</div>}

        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}

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
