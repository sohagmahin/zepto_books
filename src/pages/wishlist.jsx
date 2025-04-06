import { Trash2 } from "lucide-react";
import React from "react";

const products = [
  {
    name: "The grate novel",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
  {
    name: "The grate novel",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
  {
    name: "The grate novel",
    image:
      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg",
  },
];

const Wishlist = () => {
  return (
    <div className="p-20">
      <div className="text-center">
        <p className="font-semibold text-3xl tracking-tight opacity-80">
          Wishlist
        </p>
      </div>
      <div className="flex gap-6 flex-col pt-2">
        {products.map((product) => {
          return (
            <div className="flex justify-between p-7 shadow items-center">
              <div className="flex items-center">
                <div className="w-16 h-20 bg-gray-100 flex items-center justify-center">
                  <img
                    src={
                      "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg"
                    }
                    alt={"book image"}
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">The Grate Novel</p>
                  <p className="tracking-tight opacity-60">Jon Deo</p>
                </div>
              </div>
              <div>
                <Trash2 />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
