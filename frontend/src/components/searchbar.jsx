import React, { useState, lazy, Suspense } from "react";
import { useForm } from "react-hook-form";

import { GoSearch } from "react-icons/go";
import IconButton from "./iconbutton";

const SearchBar = ({
  height,
  color,
  query,
  handleSearch,
  setQuery,
  iconSize,
  textSize,
  placeholder,
}) => {
  // const [query, setQuery] = useState("");

  const {
    register,
    // onChange,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   handleSearch(query);
  // };


  const handleInputChange = (e) => {  
    setQuery(e.target.value);
    // handleSearch(query); 
  };

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   handleSearch(e); 
  // };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleSearch)}>
        <div className="relative">{ 
          <input
            {...register("search", { required: true })}
            type="text"
            defaultValue={query}
            placeholder={placeholder}
            name="search"
            onChange={handleSubmit(handleSearch)}
            // onKeyDown={(e) => {if (e.key === 'Enter') handleSubmit(handleSearch) }}
            className={`${height} w-full ${textSize} text-black bg-[#ebebeb] rounded-full py-2 pl-9 pr-2 placeholder-black outline-slate-400 placeholder-opacity-30`}
          />}
          {errors.search && <span className="text-rose-800 text-sm">This field is required</span>}
          <div className="absolute inset-3 w-fit text-black">
            <IconButton type="submit">
              <GoSearch color={color} size={iconSize} />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

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
