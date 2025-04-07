import React, { useState } from "react";
import BookList from "../components/book/book-list";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(localStorage.getItem("filter") || "");

  let debounceTimer;
  const handleSearch = (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, [500]);
  };

  return (
    <>
      <div className="max-w-7xl lg:mx-auto p-5 md:px-7 w-full flex flex-col sm:flex-row justify-center sm:justify-between gap-2 sm:gap-0">
        <input
          type="text"
          placeholder="Search books..."
          value={undefined}
          onChange={handleSearch}
          className="w-full sm:max-w-[300px] p-2 border border-gray-300 rounded"
        />

        <div className="w-full flex sm:w-auto">
          <Select
            value={filter}
            onValueChange={(value) => {
              localStorage.setItem("filter", value);
              setFilter(value);
            }}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>filter</SelectLabel>
                <SelectItem value="Children">Children</SelectItem>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Humorous">Humorous</SelectItem>
                <SelectItem value="Culture">Culture</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {filter && (
            <button
              onClick={() => {
                setFilter("");
                localStorage.setItem("filter", "");
              }}
              className="pl-2 opacity-80"
            >
              <X />
            </button>
          )}
        </div>
      </div>

      <BookList searchTerm={searchTerm} filter={filter} />
    </>
  );
};

export default HomePage;
