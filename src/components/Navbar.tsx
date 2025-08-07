import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Stars, Home, Target, Clock, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <div className="cosmic-background"></div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <Stars size={32} />
            91Astro
          </Link>

          <ul className="navbar-nav">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                <Home size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {t('home')}
              </Link>
            </li>
            <li>
              <Link 
                to="/mangal-dosh" 
                className={location.pathname === '/mangal-dosh' ? 'active' : ''}
              >
                <Heart size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {t('mangalDosh')}
              </Link>
            </li>
            <li>
              <Link 
                to="/shani-sade-sathi" 
                className={location.pathname === '/shani-sade-sathi' ? 'active' : ''}
              >
                <Clock size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {t('shaniSadeSathi')}
              </Link>
            </li>
            <li>
              <Link 
                to="/isht-devta" 
                className={location.pathname === '/isht-devta' ? 'active' : ''}
              >
                <Target size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {t('ishtDevta')}
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            <button 
              className="language-toggle" 
              onClick={toggleLanguage}
            >
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
            <button 
              className="logout-btn" 
              onClick={handleLogout}
            >
              {t('logout')}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;