import BookCard from "./book-card";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
];
const BookList = () => {
  return (
    <div className="p-14 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
