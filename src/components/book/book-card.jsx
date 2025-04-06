import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Heart } from "lucide-react";

const ProductCard = ({ book }) => {
  const navigate = useNavigate();
  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div
          className="aspect-square relative hover:cursor-pointer"
          onClick={() => navigate(`/book/${book?.id}`)}
        >
          <img
            src={book.image}
            alt={book.name}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative flex flex-col gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
          <button
            onClick={() => {}}
            className="absolute bottom-0 right-0 bg-white rounded-full shadow p-1"
          >
            <Heart size={20} className="text-red-500" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
