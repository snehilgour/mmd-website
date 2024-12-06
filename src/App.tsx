// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import DrivingExperience from './components/DrivingExperience';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Reviews from './components/Reviews'; // Import Reviews
import Statistics from './components/Statistics'; // Import Statistics

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Courses />
      <DrivingExperience />
      <Features />
      <Statistics /> {/* Add the Statistics Section here */}
      <Reviews /> {/* Add the Reviews Section here */}
      <ContactForm />
    </div>
  );
}

export default App;
