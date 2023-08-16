import { useEffect, useState } from 'react';
import './styles/HeroPage.css';

function Intro() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      // Limpieza si es necesario
    };
  }, []);

  return (
    <div className={`intro-container ${loading ? 'loading' : ''}`}>
      <div> 
        <h1 className={`fade-in ${loading ? 'hidden' : 'delayed'}cut-text`}>
          <span>huilen .</span>
        </h1>
      </div>
      <div className="loading-line-container">
        <div className="loading-line"></div>
      </div>
    </div>
  );
}

export default Intro;
