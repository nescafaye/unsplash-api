import React, { useState, useEffect, lazy, Suspense } from "react";
import Skeleton from "../components/skeleton";
import axios from "axios";

const Navbar = lazy(() => import("../components/navbar"));
const Image = lazy(() => import("../components/image"));
// const Skeleton = lazy (() => import ("../components/skeleton"))

const accessKey = "Zyve4MYyZZu2iGYEbxRLy-rW87L1Jj7WsNNslPy3qDg";

const Home = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  // console.log(process.env);

  const fetchImages = async () => {
    const result = await axios.get(
      `https://api.unsplash.com/photos/?per_page=24&client_id=${accessKey}&query=${query}`
    );
    console.log(result.data);
    setImages(result.data);
  };

  useEffect(() => {
    if (query == "") {
      fetchImages();
    } else if (query !== "") {
      fetchImages(query);
    }
  }, [query]);


  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Navbar search={query}/>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-5 gap-5 mx-auto w-[85%] mt-24 pb-24">
        {images.map((image) => {
          return (
            <>
              <Suspense fallback={<Skeleton />}>
                <Image
                  key={image.id}
                  url={image.urls.small}
                  alt={image.description}
                  user={image.user.username}
                  likes={image.likes}
                  link={image.links.html}
                  profile={image.user.profile_image.medium}
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
