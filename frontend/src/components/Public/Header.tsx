import { useState } from 'react';
import { Navbar, Container, Nav, Collapse } from 'react-bootstrap';
import { MdMenu, MdClose } from 'react-icons/md'; // Importa los íconos
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
            <div >
              <h1 className='h-logo'>h.</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
            {isMenuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav box" className={`menu-collapse ${isMenuOpen ? 'show' : ''}`}>
            <Nav className="ms-auto">
              <Nav.Link href="#home">INICIO</Nav.Link>
              <Nav.Link href="#about">ACERCA</Nav.Link>
              <Nav.Link href="#projects">PROYECTOS</Nav.Link>
              <Nav.Link href="#contact">CONTACTO</Nav.Link>
              <Collapse in={isMenuOpen}>
                <div className="footer-content">
                  <Link to="mailto:huilenpe@gmail.com" style={{ color: 'black', marginRight:"30px"}}>
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
