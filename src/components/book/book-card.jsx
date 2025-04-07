import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const ProductCard = ({ book, setWishlistCount }) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    const wishList = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const exist = wishList.find((item) => item.id === book.id);
    if (!exist) {
      wishList.push(book);
      localStorage.setItem("wishlist", JSON.stringify(wishList));
      setIsWishlisted(true);
      setWishlistCount(wishList.length);
    } else {
      const updatedWishList = wishList.filter((item) => item.id !== book.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
      setIsWishlisted(false);
      setWishlistCount(updatedWishList.length);
    }
  };

  useEffect(() => {
    if (!book.id) return;
    const wishList = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const exist = wishList.find((item) => item.id === book.id);

    if (exist) {
      setIsWishlisted(true);
    } else {
      setIsWishlisted(false);
    }
  }, [book.id]);

  return (
    <Card className="w-full sm:max-w-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div
          className="relative hover:cursor-pointer"
          onClick={() => navigate(`/book/${book?.id}`)}
        >
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-[250px] object-contain rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative flex flex-col gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <button
            onClick={handleWishlist}
            className="absolute bottom-0 right-0 bg-white rounded-full shadow p-1"
          >
            <Heart
              size={20}
              className="text-red-500"
              fill={isWishlisted ? "red" : "none"}
            />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
