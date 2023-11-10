'use client'
import React, { useState, useEffect } from "react";

function ImageGrid() {

  const max = 50;

  // Use State for Images.
  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(10);
  // API
  const api = "https://jsonplaceholder.typicode.com/photos";
  // On Mount Call API & Filter Data
  useEffect(() => {
    fetchImages();
    console.log(limit);
  }, [limit]);

  // Fetch Data
  const fetchImages = () => {
    // Call the API
    fetch(api)
      .then(res => res.json())
      .then(data => {
        // Filter to Even albumId only
        const filterData = data.filter(x => x.albumId % 2 === 0);
        setImages(filterData);
      })
      .catch(err => console.log(err));
  };

  const handleShowMoreImages = () => {
    // I'm getting an error her
    if (limit <= max) {
      setLimit(limit + 10);
    }
  };
  return (
      <div className="container mx-auto px-5 py-2 lg:px-12 lg:pt-4">
  <div className="flex flex-wrap ">
    <div className="flex flex-wrap sm:w-1/2 lg:w-1/2 md:w-1/3 xl:w-1/3">
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
       <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div><div className="flex flex-wrap sm:w-1/2 lg:w-1/2 md:w-1/3 xl:w-1/3">
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
       <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    {/* <div className="flex flex-wrap sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3">
      <div className="w-full p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div> */}


  
  

    <div>
      {images.slice(0, limit).map(album => (
        <img className="albumImg" src={album.url} alt={album.title} />
      ))}
      <button
        disabled={limit >= max}
        onClick={handleShowMoreImages}
        variant="contained"
      >
        Load More
      </button>
    </div>

  </div>
</div>



  )
}

export default ImageGrid