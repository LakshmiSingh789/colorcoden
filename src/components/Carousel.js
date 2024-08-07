import React, { useState, useEffect } from "react";

const Carousel = ({
  images,
  height,
  width,
  timeInterval,
  navigationDots = true,
  leftIcon = "◀",
  rightIcon = "▶",
}) => {
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
    <div className="relative mt-5" style={{ width, height }}>
      <div className="flex justify-between absolute w-full h-full top-0">
        <button
          onClick={goLeft}
          className="z-10 bg-gray-800 text-white p-2 rounded-full self-center"
          aria-label="Previous"
        >
          {/* {closeIcon} */}
          {/* &#9664; */}
          {/* Left Icon */}
          {leftIcon}
        </button>
        <button
          onClick={goRight}
          className="z-10 bg-gray-800 text-white p-2 rounded-full self-center"
          aria-label="Next"
        >
          {/* &#9654; */}
          {/* Right Icon */}
          {rightIcon}
        </button>
      </div>
      <div className="overflow-hidden w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`object-cover absolute transition duration-500 ease-in-out transform ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ height, width }}
            onError={handleImageError}
          />
        ))}
      </div>
      {navigationDots && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-4">
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
      )}
    </div>
  );
};

export default Carousel;