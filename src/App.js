import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import videoImage from "./assets/default-video.jpg";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date();
  const earlierDate = currentDate.setMonth(currentDate.getMonth() - 1);
  const startDate = new Date(earlierDate).toISOString().slice(0, 10);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${startDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.reverse());
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [startDate]);
  return (
    <div className="container mx-auto">
      <h1 className="text-red-900 text-4xl text-center mx-auto mt-5">
        Astronomy Picture of the Day
      </h1>
      <h2 className="text-grey-400 text-xl text-center mx-auto mb-5">
        Recent images from NASA's APOD API
      </h2>
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.date} image={image} videoImage={videoImage} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
