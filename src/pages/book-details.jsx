import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setBook([]);
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // parse the data to get the book
        const book = {
          id: data?.id,
          title: data?.title,
          author: data?.authors[0]?.name,
          image: data?.formats["image/jpeg"],
          summaries: data?.summaries,
        };

        setBook(book);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="self-center h-screen w-screen flex justify-center items-center">
        Loading....
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row p-10">
      <section className="flex-1 flex justify-end">
        <div className="relative aspect-[2/3] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-lg">
          <img
            src={book?.image}
            alt="book img"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="flex-2 gap-2 flex flex-col px-10 py-10 sm:py-0">
        <h1 className="text-3xl font-bold tracking-tight">{book?.title}</h1>
        <p className="opacity-65 text-xl">by {book?.author}</p>
        <h2 className="font-semibold text-xl">Summary</h2>
        <p className="prose">{book?.summaries}</p>
      </section>
    </div>
  );
};

export default BookDetailsPage;
