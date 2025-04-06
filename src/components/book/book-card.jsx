import { Card, CardContent, CardHeader } from "../ui/card";

const ProductCard = ({ book }) => {
  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <img
            src={book.image}
            alt={book.name}
            className="object-cover w-full h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">{book.name}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
