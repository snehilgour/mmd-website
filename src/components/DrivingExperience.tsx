import React, { useState } from 'react';
import { motion } from 'framer-motion';
import car1 from '../videos/Car1.mp4';
import car2 from '../videos/Car2.mp4';
import car3 from '../videos/Car3.mp4';

const carVideos = [car1, car2, car3]; // Add more car videos if needed

const DrivingExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carVideos.length) % carVideos.length
    );
  };

  return (
    <section
      id="experience"
      className="relative h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Full-Screen Video Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <video
          key={carVideos[currentIndex]}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={carVideos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Controls for Carousel (Next/Previous) */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          &gt;
        </button>
      </div>

      {/* Overlay Instructions (Optional) */}
      <div className="absolute top-4 left-4 z-20 bg-black/50 p-4 rounded-lg text-white">
        <h3 className="font-bold mb-2">Car Experience</h3>
        <p className="text-sm">
        Learn to drive, and then you can relax and enjoy places like this.
        </p>
      </div>
    </section>
  );
};

export default DrivingExperience;
