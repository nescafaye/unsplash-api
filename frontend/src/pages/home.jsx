import React, { useState, useEffect, lazy, Suspense } from "react";
import Skeleton from "../components/skeleton";
import axios from "axios";

const Navbar = lazy(() => import("../components/navbar"));
const Image = lazy(() => import("../components/image"));
// const Skeleton = lazy (() => import ("../components/skeleton"))

const accessKey = "hbSGOSaMAaqMfWsUI6glgL3fSCCQbqaM80v6sWJ1xj8";

const Home = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const fetchImages = async () => {
    const result = await axios.get(
      `https://api.unsplash.com/photos/?per_page=24&client_id=${accessKey}&query=${query}`
    );
    console.log(result.data);
    setImages(result.data);
  };

  useEffect(() => {
    if (query !== "") {
      fetchImages(query);
    }
  }, [query]);


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Navbar />

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-5 gap-5 mx-auto w-[95%] mt-24 pb-24">
        {images.map((image) => {
          return (
            <>
              <Suspense fallback={<Skeleton />}>
                <Image
                  key={image.id}
                  url={image.urls.small}
                  alt={image.description}
                />
              </Suspense>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
