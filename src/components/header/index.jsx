import { SearchIcon, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between">
        <div className="flex-start">
          <a href={"/"} className="flex-start">
            <span className="hidden lg:block font-bold text-2xl ml-3">
              Zepto Books
            </span>
          </a>
        </div>

        {/* Product search bar */}
        <div className="relative w-[300px] flex">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </div>
        </div>

        <Button asChild variant="ghost">
          <a href="/cart">
            <ShoppingCart /> WishList
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
