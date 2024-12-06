import React from 'react';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

const courses = [
  {
    icon: Car,
    title: 'Alto (Beginner)',
    description: 'A perfect starting point for those new to driving. Get hands-on experience with a compact car.',
    duration: '18 Days',
    price: '₹4000'
  },
  {
    icon: Car,
    title: 'WagonR (Intermediate)',
    description: 'For those who want to advance their driving skills with a more spacious vehicle. Ideal for families.',
    duration: '18 Days',
    price: '₹4500'
  },
  {
    icon: Car,
    title: 'Desire (Advanced)',
    description: 'For experienced learners looking to drive with confidence. Learn advanced techniques with a premium vehicle.',
    duration: '18 Days',
    price: '₹5000'
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Driving Courses
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <course.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">Duration: {course.duration}</p>
                  <p className="text-lg font-bold text-red-600 mt-2">{course.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
