import React from 'react'
import { GoSearch } from "react-icons/go";

const SearchBar = ({height, background, color, iconSize, textSize, placeholder}) => {
  return (
    <div className='w-full'>
        <form action="">
            <div className='relative'>
                <input type="text" placeholder={placeholder} name="query" id=""  className={`${height} w-full ${textSize} text-black bg-[#ebebeb] rounded-full py-2 pl-9 pr-2 placeholder-black outline-slate-400 placeholder-opacity-30`}/>
                <div className='absolute inset-2.5 w-fit text-black'>
                    <GoSearch color={color} size={iconSize}/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchBar