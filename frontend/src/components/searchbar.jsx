import React, {useState} from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = ({
  height,
  handleSearch,
  color,
  iconSize,
  textSize,
  placeholder,
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${height} w-full ${textSize} text-black bg-[#ebebeb] rounded-full py-2 pl-9 pr-2 placeholder-black outline-slate-400 placeholder-opacity-30`}
          />
          <div className="absolute inset-2.5 w-fit text-black">
            <button type="submit">
              <GoSearch color={color} size={iconSize} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(query);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search photos..."
//         value={query}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;
