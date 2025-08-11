import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your images
import img1 from '../assets/images/IMG-20250807-WA0010.jpg';
import img2 from '../assets/images/IMG-20250807-WA0011.jpg';
import img3 from '../assets/images/IMG-20250807-WA0012.jpg';
import img4 from '../assets/images/IMG-20250807-WA0013.jpg';
import img5 from '../assets/images/IMG-20250807-WA0014.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Image gallery state
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Image gallery with your actual images
  const galleryImages = [
    {
      src: img1,
      alt: "Abhisek Hiremath - Profile Photo 1",
      fallback: "https://via.placeholder.com/400x400?text=Profile+1"
    },
    {
      src: img2, 
      alt: "Abhisek Hiremath - Profile Photo 2",
      fallback: "https://via.placeholder.com/400x400?text=Profile+2"
    },
    {
      src: img3,
      alt: "Abhisek Hiremath - Profile Photo 3",
      fallback: "https://via.placeholder.com/400x400?text=Profile+3"
    },
    {
      src: img4,
      alt: "Abhisek Hiremath - Profile Photo 4",
      fallback: "https://via.placeholder.com/400x400?text=Profile+4"
    }
  ];

  // Auto-rotate images every 5 seconds (increased for smoother experience)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <motion.div
      className="section pt-28 pb-20 px-4 sm:px-6 md:px-8 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl md:text-4xl font-semibold mb-4 font-orbitron tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-cyber-blue">Me</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-cyber-blue mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Photo Gallery */}
          <motion.div
      className="relative mx-auto lg:mx-0 card-base p-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
          >
            {/* Main Image Display */}
            <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-2xl overflow-hidden border-2 border-cyber-blue shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-cover about-image-quality"
                  loading="eager"
                  decoding="sync"
                  initial={{ 
                    opacity: 0, 
                    scale: 1.05
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 1.05
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut",
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.6 }
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = galleryImages[selectedImage].fallback;
                  }}
                />
              </AnimatePresence>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/20 to-transparent"></div>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'bg-cyber-blue border-cyber-blue shadow-lg shadow-cyber-blue/50' 
                        : 'bg-transparent border-white/50 hover:border-white'
                    }`}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ 
                      scale: 1.2
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Removed extra floating frame animations for cleaner look */}
            
            {/* Thumbnail preview */}
            <div className="flex justify-center mt-6 space-x-3">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-500 ${
                    selectedImage === index 
                      ? 'border-cyber-blue scale-110 shadow-lg shadow-cyber-blue/30' 
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ 
                    scale: selectedImage === index ? 1.1 : 1.05,
                    borderColor: "#38bdf8",
                    boxShadow: "0 4px 20px rgba(56, 189, 248, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover about-image-quality"
                    whileHover={{ 
                      scale: 1.1,
                      filter: "brightness(1.1) contrast(1.1)"
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = image.fallback;
                    }}
                  />
                  {/* Active indicator */}
                  {selectedImage === index && (
                    <motion.div
                      className="absolute inset-0 ring-2 ring-cyber-blue ring-opacity-50"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold font-orbitron">Abhisek Hiremath</h2>
            <p className="text-lg text-gray-300 font-light">
              <span className="text-cyber-blue font-normal">Student & Developer</span>
            </p>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Hi there! I'm a passionate developer and a 3rd year Computer Science Engineering student specializing in 
                AI and Machine Learning at Siddaganga Institute of Technology.
              </p>
              
              <p>
                My journey into coding began with a curiosity about how things work behind the scenes. This curiosity 
                evolved into a passion for backend development and artificial intelligence.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or 
                solving interesting algorithmic problems.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 font-orbitron">Education</h3>
              <div className="card-base p-4">
                <p className="font-medium">Siddaganga Institute of Technology</p>
                <p className="text-cyber-blue">B.E. in Computer Science (AI & ML)</p>
                <p className="text-sm text-gray-400">2023 - 2027</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Photos Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-orbitron mb-4">
              My <span className="text-cyber-blue">Journey</span>
            </h3>
            <div className="w-16 h-1 bg-cyber-blue mx-auto"></div>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                src: img5,
                alt: "Abhisek - Journey Photo 1",
                title: "My Development Journey",
                description: "Passionate about coding and technology",
                fallback: "https://via.placeholder.com/300x200?text=Journey+1"
              },
              {
                src: img1, 
                alt: "Abhisek - Journey Photo 2",
                title: "Learning & Growth",
                description: "Continuous improvement mindset",
                fallback: "https://via.placeholder.com/300x200?text=Journey+2"
              },
              {
                src: img3,
                alt: "Abhisek - Journey Photo 3",
                title: "Future Aspirations",
                description: "Building tomorrow's solutions",
                fallback: "https://via.placeholder.com/300x200?text=Journey+3"
              }
            ].map((photo, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl card-base transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.015, y: -4 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover about-image-quality transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = photo.fallback;
                    }}
                  />
                </div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-semibold text-white mb-1">{photo.title}</h4>
                    <p className="text-sm text-gray-300">{photo.description}</p>
                  </div>
                </div>
                
                {/* Glow effect */}
        <div className="absolute inset-0 ring-1 ring-cyber-blue/0 group-hover:ring-cyber-blue/30 transition-all duration-300 rounded-xl"></div>
              </motion.div>
            ))}
          </div>
      <div className="section-divider" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
