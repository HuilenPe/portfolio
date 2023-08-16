import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '../../components/Public/Header';
import './styles/HomePage.css';

const colors = ['#83b8aa', '#ffb350', '#b83564', '#ffb350', '#272d4d'];

function HomePage() {
  const [showPage, setShowPage] = useState(false);
  const controls = useAnimation();
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
      controls.start({
        x: 0,
        opacity: 1,
        backgroundColor: colors[currentColorIndex],
        transition: {
          duration: 2, // Ajusta la duración de la transición de colores
        },
      });

      const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 8000); // Ajusta el tiempo de cambio de colores (8000 ms = 8 segundos)

      return () => clearInterval(interval);
    }, 1000);
  }, [controls, currentColorIndex]);

  return (
    <motion.div
      className={`home-page ${showPage ? 'active' : ''}`}
      initial={{ x: '-100vw', opacity: 0 }}
      animate={controls}
      exit={{ x: '100vw', opacity: 0 }}
    >
      <Header />
    </motion.div>
    
  );
}

export default HomePage;
