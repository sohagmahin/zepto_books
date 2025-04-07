import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-7 w-full flex justify-between">
        <div className="flex-start">
          <Link to="/" className="flex-start">
            <span className="block font-bold text-2xl">Zepto Books</span>
          </Link>
        </div>

        <Button asChild variant="ghost">
          <Link to="/wishlist">
            <ShoppingCart /> Wishlist
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
