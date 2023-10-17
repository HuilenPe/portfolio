import { useState } from 'react';
import { Navbar, Container, Nav, Collapse } from 'react-bootstrap';
import { MdMenu, MdClose } from 'react-icons/md';
import '../../components/Public/styles/Header.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <Navbar expand="lg" className={`menu-open-${isMenuOpen ? 'true' : 'false'}`}>
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <Link to="/home" className="hover">
                <h1 className='h-logo'>h.</h1>
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
            {isMenuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav box" className={`menu-collapse ${isMenuOpen ? 'show' : ''}`}>
            <Nav className="ms-auto">
              <Link to="/home" className="menu-link">INICIO</Link>
              <Link to="/projects" className="menu-link">PROYECTOS</Link>
              <Link to="/about" className="menu-link">SOBRE MI</Link>
              <Collapse in={isMenuOpen}>
                <div className="footer-content">
                  <Link to="mailto:huilenpe@gmail.com" style={{ color: 'black', marginRight: "30px" }}>
                    <FaEnvelope size={20} />
                  </Link>
                  <Link to="https://www.linkedin.com/in/huilen-pe" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <FaLinkedin size={20} />
                  </Link>
                  <Link to="https://github.com/HuilenPe" target="_blank" rel="noopener noreferrer" style={{ color: 'black', marginLeft: "30px" }}>
                    <FaGithub size={20} />
                  </Link>
                </div>
              </Collapse>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
    </div>
  );
}

export default Header;