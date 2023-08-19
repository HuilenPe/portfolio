import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HeroPage.css';

function HeroPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Reduced initial loading time
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowHeading(true);
        setTimeout(() => {
          navigate('/home');
        }, 3000); // Reduced time before redirection after h1 is visible
      }, 20); // Adjust this value to control the time the h1 is visible
    }
  }, [loading, navigate]);

  return (
    <div className={`intro-container ${loading ? 'loading' : ''}`}>
      <div>
        <h1 className={`fade-in ${showHeading ? 'visible' : ''}`}>
          <span>huilen .</span>
        </h1>
      </div>
      <div className="loading-line-container">
        <div className="loading-line"></div>
      </div>
    </div>
  );
}

export default HeroPage;