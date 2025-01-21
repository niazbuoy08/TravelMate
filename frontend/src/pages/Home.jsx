import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import grandCanyonImage from "../assets/images/grand-canyon.jpg";
import parisImage from "../assets/images/paris.jpg";
import safariImage from "../assets/images/safari.jpg";

export default function Home() {
  const navigate = useNavigate();

  // Array of images with titles and descriptions
  const images = [
    {
      src: parisImage,
      title: "Paris Getaway",
      description: "The City of Lights and Love.",
    },
    {
      src: grandCanyonImage,
      title: "Grand Canyon Adventure",
      description: "Breathtaking Views Await You.",
    },
    {
      src: safariImage,
      title: "Safari in Africa",
      description: "Witness the Wildlife Like Never Before.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-screen flex-shrink-0 relative"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{image.title}</h1>
                <p className="text-lg md:text-xl italic mb-6">{image.description}</p>
                <button
                  onClick={() => navigate("/tours")}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition"
                >
                  View Tours
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition z-10"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition z-10"
          aria-label="Next Slide"
        >
          &#8250;
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 flex space-x-2 justify-center w-full z-10">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}
