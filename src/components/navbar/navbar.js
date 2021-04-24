import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import SibdevLogo from '../../assets/sibdev-logo.svg';
import { userLogout } from '../../utils/localStorage';
import './navbar.scss';

const Navbar = () => {
  const history = useHistory();
  const currentPath = history.location.pathname;

  const handleLogoutClick = () => {
    userLogout(history);
  };

  const activeLinkClasses = 'navbar__item navbar__link navbar__link_active';
  const inactiveLinkClasses = 'navbar__item navbar__link';

  return (
    <div className="navbar">
      <img src={SibdevLogo} alt="Sibdev logo" className="navbar__logo" />
      <Link
        to="/search"
        className={
          currentPath === '/search' || currentPath === '/search/result'
            ? activeLinkClasses
            : inactiveLinkClasses
        }
      >
        Поиск
      </Link>
      <Link
        to="/search/favourites"
        className={
          currentPath === '/search/favourites'
            ? activeLinkClasses
            : inactiveLinkClasses
        }
      >
        Избранное
      </Link>
      <div className="navbar__item" onClick={handleLogoutClick}>
        Выйти
      </div>
    </div>
  );
};

export default Navbar;
