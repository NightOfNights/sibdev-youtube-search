import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SibdevLogo from '../../assets/sibdev-logo.svg';
import './navbar.scss';

const Navbar = () => {
  const history = useHistory();

  const handleLogoutClick = () => {
    console.log('log out');
    localStorage.removeItem('token');
    history.push('/auth');
  };

  return (
    <div className="navbar">
      <img src={SibdevLogo} alt="Sibdev logo" className="navbar__logo" />
      <Link to="/search" className="navbar__item">
        Поиск
      </Link>
      <Link to="/search/favourites" className="navbar__item">
        Избранное
      </Link>
      <div className="navbar__item" onClick={handleLogoutClick}>
        Выйти
      </div>
    </div>
  );
};

export default Navbar;
