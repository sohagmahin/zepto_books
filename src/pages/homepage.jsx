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
      <div className="px-22 pt-4 sm:pt-4 flex justify-center">
        <input
          type="text"
          placeholder="Search books..."
          value={undefined}
          onChange={handleSearch}
          className="w-full sm:max-w-[300px] p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-center sm:justify-end pr-30">
        <Select
          value={filter}
          onValueChange={(value) => {
            localStorage.setItem("filter", value);
            setFilter(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
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

      <BookList searchTerm={searchTerm} filter={filter} />
    </>
  );
};

export default HomePage;
