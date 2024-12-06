import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Car, Signal, TrafficCone } from 'lucide-react'; // Car and Signal icons
import gsap from 'gsap'; // Import GSAP for advanced animations

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a simple car model with more details
    const carGeometry = new THREE.BoxGeometry(2, 1, 4);
    const carMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const car = new THREE.Mesh(carGeometry, carMaterial);
    scene.add(car);

    // Add more lights for a better effect
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 10;

    // Mouse movement handler
    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      car.rotation.y = x * Math.PI / 4;
      car.position.x = x * 5;
      car.position.y = y * 2;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      car.rotation.y += 0.01; // Smooth car rotation for animation
      car.position.z += 0.02; // Slow forward movement to simulate driving
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".hero-title",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".hero-icons",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      ".cta-buttons",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" }
    );
  }, []);

  // Toggle Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative h-screen bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
      <div className="container mx-auto px-4 pt-32 hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Logo with Car and Signal */}
          <div className="flex items-center justify-center mb-6 hero-title">
            {/* Car Icon */}
            <Car className="w-12 h-12 text-red-600 mr-2" />
            <h1 className="text-5xl font-bold ml-2">Master Motor</h1>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Driving School</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey to becoming a confident driver with our expert instructors
            and comprehensive training programs. We offer personalized lessons for all levels!
          </p>

          {/* Hero Icons with GSAP */}
          <div className="flex justify-center gap-8 mb-8 hero-icons">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-lg"
            >
              <Signal className="w-10 h-10 text-yellow-400" />
              <p className="mt-2">Expert Instructors</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center text-lg"
            >
              <TrafficCone className="w-10 h-10 text-blue-400" />
              <p className="mt-2">Comprehensive Training</p>
            </motion.div>
          </div>

          {/* Call-to-action Buttons */}
          <motion.div className="flex justify-center gap-6 cta-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
              onClick={toggleModal}
            >
              Book Your First Lesson
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-3 rounded-full border-2 border-white text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <motion.div
            ref={modalRef}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-white p-8 rounded-lg w-11/12 md:w-1/2"
          >
            <h2 className="text-2xl font-bold mb-4">Master Motor Driving School</h2>
            <p className="mb-4">Driving school in Udaipur, Rajasthan</p>
            <p className="mb-4">Address: 86, Panchsheel Market, Sector 5, Prabhat Nagar, Hiran Magri, Udaipur, Rajasthan 313002</p>
            <p className="mb-4">Hours: Closed ⋅ Opens 7 am Sat</p>
            <p className="mb-4">Phone: <a href="tel:+919829766393" className="text-blue-600">098297 66393</a></p>
            <p className="mb-4">WhatsApp: <a href="https://wa.me/919829766393" className="text-blue-600">Click here</a></p>
            <p className="mb-4">Instagram: <a href="https://www.instagram.com/mastermotor_udr" className="text-blue-600">mastermotor_udr</a></p>

            {/* Embed Map */}
            <div className="my-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.4684501816735!2d73.77426121434492!3d24.58233548482821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964c81361fa300d%3A0x13b226c6781fe08a!2sMaster%20Motor%20Driving%20School!5e0!3m2!1sen!2sin!4v1670541489981!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <motion.button
              onClick={toggleModal}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full"
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
