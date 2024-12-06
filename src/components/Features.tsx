import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Our top priority is ensuring your safety with well-maintained vehicles and experienced instructors.'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose from various time slots that fit your busy schedule.'
  },
  {
    icon: Award,
    title: 'Certified Training',
    description: 'Get trained by certified instructors with years of experience.'
  },
  {
    icon: Users,
    title: 'Personalized Learning',
    description: 'Tailored instruction to match your learning style and pace.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;