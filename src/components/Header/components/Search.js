import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const searchhandeler = (e) => {
    if (e.type === "focus") {
      if (window.screen.availWidth < 640) {
        setOpenSearch(true);
      }
    } else {
      setOpenSearch(false);
    }
  };
  const submithandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submithandler}
      dir="rtl"
      className={`flex items-center ${
        openSearch ? "absolute top-4 w-full left-0" : ""
      }`}
    >
      <label
        htmlFor="search"
        className="border py-3 border-l-0 rounded-r-lg pr-4 border-disabletext sm:border-r-0 sm:rounded-r-none"
      >
        <FaSearch className="text-xl text-disabletext  " />
      </label>
      <input
        id="search"
        onFocus={searchhandeler}
        onBlur={searchhandeler}
        type="text"
        className={`border border-r-0 rounded-r-none outline-none rounded-lg border-disabletext placeholder-disabletext w-full lg:w-96 pr-1 py-2 text-lg `}
        placeholder="جستوجو..."
      />
    </form>
  );
};

export default Search;
