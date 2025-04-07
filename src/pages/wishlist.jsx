import { Delete, Trash, Trash2 } from "lucide-react";
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
    <div className="p-20">
      <div className="text-center">
        <p className="font-semibold text-3xl tracking-tight opacity-80">
          Wishlist
        </p>
      </div>
      <div className="flex gap-6 flex-col pt-2">
        {wishlist.map((book) => {
          return (
            <div className="flex justify-between p-7 shadow items-center">
              <div className="flex items-center">
                <div className="w-16 h-20 bg-gray-100 flex items-center justify-center">
                  <img
                    src={book?.image}
                    alt={book?.title}
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold tracking-tight">{book?.title}</p>
                  <p className="tracking-tight opacity-60">{book?.author}</p>
                </div>
              </div>
              <button
                className="hover:cursor-pointer"
                onClick={() => removeWishList(book?.id)}
              >
                <Trash2 />
              </button>
            </div>
          );
        })}
        {wishlist && wishlist.length > 0 && (
          <div className="flex justify-end">
            <Button
              className="w-40 bg-red-500 hover:cursor-pointer"
              onClick={() => removeAllWishlist()}
            >
              <Trash2 />
              Clear Wishlist
            </Button>
          </div>
        )}
        {wishlist.length <= 0 && (
          <p className="self-center pt-10">No available wishlist!</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
