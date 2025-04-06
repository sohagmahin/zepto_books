const BookDetailsPage = () => {
  return (
    <div className="flex flex-col sm:flex-row p-10">
      <section className="flex-1 flex justify-end">
        <div className="relative aspect-[2/3] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg"
            alt="book img"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="flex-2 gap-2 flex flex-col px-10 py-10 sm:py-0">
        <h1 className="text-3xl font-bold tracking-tight">The Great Novel</h1>
        <p className="opacity-65 text-xl">by Jane Doe</p>
        <h2 className="font-semibold text-xl">Summary</h2>
        <p className="prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          magnam dolores illum, explicabo laboriosam facilis perferendis omnis
          natus et odio quae ab ex dicta soluta ipsam at ipsa quis inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          magnam dolores illum, explicabo laboriosam facilis perferendis omnis
          natus et odio quae ab ex dicta soluta ipsam at ipsa quis inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          magnam dolores illum, explicabo laboriosam facilis perferendis omnis
          natus et odio quae ab ex dicta soluta ipsam at ipsa quis inventore?
        </p>
      </section>
    </div>
  );
};

export default BookDetailsPage;
