import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-3">
      <img src={image.url} alt={image.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-center text-lg mb-2">
          {image.date}
        </div>
        <div className="font-semibold text-500 text-center text-lg mb-2">
          {image.title}
        </div>
      </div>
    </div>
  );
};
export default ImageCard;
