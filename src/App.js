import React, { useState, useEffect } from "react";

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
        setImages(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-6xl">Hello World!</h1>
    </div>
  );
}

export default App;
