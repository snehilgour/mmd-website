// src/components/Statistics.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Statistics: React.FC = () => {
  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [totalTrainers, setTotalTrainers] = useState(0);
  const [locations, setLocations] = useState(0);

  useEffect(() => {
    // Faster counters for lessons completed and happy customers
    const lessonInterval = setInterval(() => {
      if (lessonsCompleted < 50000) {
        setLessonsCompleted((prev) => prev + 1000); // Increase speed of lesson count
      }
    }, 5); // Faster increase

    const customerInterval = setInterval(() => {
      if (happyCustomers < 1000) {
        setHappyCustomers((prev) => prev + 20); // Faster customer count
      }
    }, 20); // Faster speed

    const trainerInterval = setInterval(() => {
      if (totalTrainers < 100) {
        setTotalTrainers((prev) => prev + 1); // Increase trainers
      }
    }, 100); // Trainers increase slower than customers/lessons

    const locationInterval = setInterval(() => {
      if (locations < 10) {
        setLocations((prev) => prev + 1); // Locations increase at a slower pace
      }
    }, 150); // Locations increase slower

    return () => {
      clearInterval(lessonInterval);
      clearInterval(customerInterval);
      clearInterval(trainerInterval);
      clearInterval(locationInterval);
    };
  }, [lessonsCompleted, happyCustomers, totalTrainers, locations]);

  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Achievements</h2>
        <div className="flex justify-center space-x-16">
          <motion.div
            className="text-6xl font-bold text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {lessonsCompleted}+
            <p className="text-lg text-gray-300">Lessons Completed</p>
          </motion.div>
          <motion.div
            className="text-6xl font-bold text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {happyCustomers}+
            <p className="text-lg text-gray-300">Happy Students</p>
          </motion.div>
          <motion.div
            className="text-6xl font-bold text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {totalTrainers}
            <p className="text-lg text-gray-300">Trainers</p>
          </motion.div>
          <motion.div
            className="text-6xl font-bold text-purple-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {locations}
            <p className="text-lg text-gray-300">Locations</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
