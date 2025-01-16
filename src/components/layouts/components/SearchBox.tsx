import { Search } from "lucide-react";

export const SearchBox = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for something"
        className="pl-10 pr-4 py-2 border rounded-full w-full md:w-64 bg-background"
      />
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
};
