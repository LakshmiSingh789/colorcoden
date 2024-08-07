import React, { useState, useEffect } from "react";
import { productDetails } from "../ProductsData";
import { useParams } from 'react-router-dom';

const Carousel = ({
  images,
  height,
  width,
  timeInterval,
  navigationDots = true,
  leftIcon = "◀",
  rightIcon = "▶",
}) => {
  const { id } = useParams();
  const productDetail = productDetails.find((p) => p.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const goRight = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    let timer;
    if (timeInterval) {
      timer = setInterval(() => {
        goRight();
      }, timeInterval * 1000);
    }

    return () => clearInterval(timer);
  }, [currentIndex, timeInterval]);

  const handleImageError = (event) => {
    event.target.src =
      "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg";
    event.target.alt = "Image not found";
  };

  return (
    <>
    <div className="relative border-[3px] rounded-3xl border-orange-200" style={{ width }}>
      <div className="relative" style={{ height }}>
        <div className="flex justify-between absolute w-full h-full top-0 font-extrabold text-amber-900 text-2xl">
          <button
            onClick={goLeft}
            className="z-10 p-2 self-center"
            aria-label="Previous"
          >
            {leftIcon}
          </button>
          <button
            onClick={goRight}
            className="z-10 p-2 self-center"
            aria-label="Next"
          >
            {rightIcon}
          </button>
        </div>
        <div className="overflow-hidden w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`object-cover absolute transition duration-500 rounded-3xl ease-in-out transform ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ height, width }}
              onError={handleImageError}
            />
          ))}
        </div>
      </div>
    </div>
    {productDetail.type === "adult" && navigationDots && (
        <div className="flex justify-center space-x-2 mt-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`h-12 w-12 object-cover cursor-pointer border-2 ${
                index === currentIndex ? "border-red-500" : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
              onError={handleImageError}
            />
          ))}
        </div>
      )}
       {productDetail.type === "kids" && navigationDots && (
        <div className="flex justify-center space-x-2 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 bg-gray-400 rounded-full ${
                index === currentIndex ? "bg-red-500" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}</>
  );
};

export default Carousel;
