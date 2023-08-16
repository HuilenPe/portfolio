import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HeroPage.css';

function HeroPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [transitionComplete, setTransitionComplete] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setTransitionComplete(true);
      }, 3000);
    }, 500);
  }, []);

  useEffect(() => {
    if (transitionComplete) {
      setShowHeading(true);
      setShowTransition(true);

      setTimeout(() => {
        navigate('/home');
      }, 3000);
    }
  }, [transitionComplete, navigate]);

  return (
    <div className={`intro-container ${loading ? 'loading' : ''}`}>
      <div>
        <h1 className={`fade-in ${!showHeading ? 'hidden' : ''} ${loading ? 'delayed' : ''} cut-text`}>
          <span>huilen .</span>
        </h1>
      </div>
      <div className="loading-line-container">
        <div className="loading-line"></div>
      </div>
      <div className={`transition-background ${showTransition ? 'visible' : ''}`}></div>
      <div className={`transition-plane ${showTransition ? 'visible' : ''} first-half`}></div>
      <div className={`transition-plane ${showTransition ? 'visible last second-half' : ''}`}></div>
    </div>
  );
}

export default HeroPage;
