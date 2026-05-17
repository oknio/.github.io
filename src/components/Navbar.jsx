import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, ChevronDown, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProjects = [
    { id: 'delivery-dash', title: 'Delivery Dash', image: '/images/delivery_dash.jpg' },
    { id: 'eyes-wide-shut', title: 'Eyes Wide Shut', image: '/images/eyes_wide_shut.webp' },
    { id: 'donkey-kong', title: 'donkey-kong', image: '/images/donkey_kong.png' },
  ];

  const handleCardClick = (id) => {
    console.log("Navbar card clicked:", id);
    
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        console.log("Element found, scrolling:", id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.error("Element not found for scrolling:", id);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToElement, 300);
    } else {
      scrollToElement();
    }

    // Defer closing the dropdown to ensure scroll event triggers successfully
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isDropdownOpen ? 'dropdown-active' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/nio_logo.png" alt="Logo" />
        </Link>

        <ul className="navbar-menu">
          <li 
            className="nav-item has-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link" onClick={toggleDropdown}>
              PROJECTS <ChevronDown size={16} />
            </span>
            
            {/* Mega Menu Dropdown */}
            <div className={`mega-menu ${isDropdownOpen ? 'show' : ''}`}>
              <div className="mega-menu-content">
                <div className="mega-menu-header">
                  <h3>Featured Projects</h3>
                  <Link to="/" onClick={() => setIsDropdownOpen(false)} className="view-all">View All <ArrowRight size={16} /></Link>
                </div>
                <div className="mega-menu-grid">
                  {featuredProjects.map(project => (
                    <div 
                      key={project.id} 
                      onClick={() => handleCardClick(project.id)} 
                      className="game-card"
                    >
                      <img src={project.image} alt={project.title} />
                      <div className="game-card-title-overlay">
                        <span>{project.title === 'donkey-kong' ? 'Donkey Kong: SFML' : project.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/contact" className="icon-btn user-btn" aria-label="Contact">
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


