import { Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

const Wishlist = ({ setWishlistCount }) => {
  const [wishlist, setWishlist] = useState([]);

  const removeWishList = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistCount(updatedWishlist.length);
  };

  const removeAllWishlist = () => {
    setWishlist([]);
    localStorage.setItem("wishlist", []);
    setWishlistCount(0);
  };

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(wishList);
  }, []);
  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="text-center">
        <p className="font-semibold text-2xl sm:text-3xl tracking-tight opacity-80">
          Wishlist
        </p>
      </div>
      <div className="flex gap-4 sm:gap-6 flex-col pt-4 sm:pt-6">
        {wishlist.map((book) => {
          return (
            <div
              key={book.id}
              className="flex flex-col sm:flex-row justify-between p-4 sm:p-7 shadow items-center gap-4 sm:gap-0"
            >
              <div className="flex items-center w-full sm:w-auto">
                <div className="w-16 h-20 bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={book?.image}
                    alt={book?.title}
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold tracking-tight text-sm sm:text-base">
                    {book?.title}
                  </p>
                  <p className="tracking-tight opacity-60 text-sm sm:text-base">
                    {book?.author}
                  </p>
                </div>
              </div>
              <button
                className="hover:cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => removeWishList(book?.id)}
                aria-label="Remove from wishlist"
              >
                <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          );
        })}
        {wishlist && wishlist.length > 0 && (
          <div className="flex justify-end mt-4">
            <Button
              className="w-full sm:w-40 bg-red-500 hover:bg-red-600 transition-colors"
              onClick={() => removeAllWishlist()}
            >
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Clear Wishlist
            </Button>
          </div>
        )}
        {wishlist.length <= 0 && (
          <p className="self-center pt-10 text-center text-gray-500">
            No available wishlist!
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
