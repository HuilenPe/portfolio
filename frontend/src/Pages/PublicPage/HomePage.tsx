import { useEffect, useState } from 'react';
import './styles/HomePage.css';
import Footer from '../../components/Public/Footer'
import Header from '../../components/Public/Header'
import Summary from '../../components/Public/Summary'

function HomePage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 30); 
  }, []);

  return (
    <div className="home">
      <div className={`home-page ${showPage ? 'active' : ''}`}>
        <Header />
        <Summary />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
