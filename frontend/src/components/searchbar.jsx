import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import IconButton from "./iconbutton";

const SearchBar = ({
  height,
  handleSearch,
  color,
  iconSize,
  textSize,
  placeholder,
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const {
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 250);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    handleSearch(debouncedQuery);
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            {...register("search", { required: true })}
            type="text"
            placeholder={placeholder}
            name="search"
            value={query}
            onChange={handleInputChange}
            className={`${height} w-full ${textSize} text-black bg-[#ebebeb] rounded-full py-2 pl-9 pr-2 placeholder-black outline-slate-400 placeholder-opacity-30`}
          />
          {errors.search === "required" && <span>This is required</span>}
          <div className="absolute inset-3 w-fit text-black">
            <IconButton type="submit" disabled={!query}>
              <GoSearch color={color} size={iconSize} />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
