import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'inherit' }}>
      {images.map((imgSrc, idx) => (
        <img 
          key={idx}
          src={imgSrc} 
          alt={`Project Screenshot ${idx}`} 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            opacity: currentIndex === idx ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: currentIndex === idx ? 1 : 0
          }} 
        />
      ))}
      
      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrev} 
            style={{ 
              position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', 
              background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', 
              width: '30px', height: '30px', cursor: 'pointer', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', zIndex: 10 
            }}
          >
            <FiChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext} 
            style={{ 
              position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', 
              background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', 
              width: '30px', height: '30px', cursor: 'pointer', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', zIndex: 10 
            }}
          >
            <FiChevronRight size={20} />
          </button>
          
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px', zIndex: 10 }}>
            {images.map((_, idx) => (
              <span 
                key={idx} 
                style={{ 
                  width: '8px', height: '8px', borderRadius: '50%', 
                  background: currentIndex === idx ? 'white' : 'rgba(255,255,255,0.5)', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
                  transition: 'background 0.3s'
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
