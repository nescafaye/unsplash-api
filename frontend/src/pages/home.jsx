import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Skeleton from "../components/skeleton";

const Navbar = lazy(() => import("../components/navbar"));
const SearchBar = lazy(() => import("../components/searchbar"));
const Image = lazy(() => import("../components/image"));

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchImages = async () => {
    const result = await axios.get(
      `https://api.unsplash.com/photos/?per_page=24&client_id=${ACCESS_KEY}`
    );
    console.log(result.data);
    setImages(result.data);
  };

  const searchImage = async (query) => {
    setSearchQuery(query);
    const response = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${query}&per_page=30&order_by=relevant&client_id=${ACCESS_KEY}`
    );
    console.log(response.data.results);
    setImages(response.data.results);
  };

  useEffect(() => {
    fetchImages();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Navbar>
        <SearchBar
          placeholder={"Search anything..."}
          handleSearch={searchImage}
        />
      </Navbar>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-5 gap-5 mx-auto w-[85%] mt-24 pb-24">
        {images.map((image) => {
          return (
            <>
              {/* <Suspense fallback={<Skeleton />}> */}
                <Image
                  key={image.id}
                  url={image.urls.small}
                  alt={image.description}
                  user={image.user.username}
                  likes={image.likes}
                  link={image.links.html}
                  profile={image.user.profile_image.medium}
                />
              {/* </Suspense> */}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
