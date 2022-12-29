import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import React, { useContext, useEffect } from 'react';
import history from 'util/history';
import { AuthContext } from 'AuthContext';
import { removeAuthData } from 'util/storage';

import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark  bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        {authContextData.authenticated && (
          <div className="nav-logout">
            <div className="nav-label">
              <a href="#logout" onClick={handleLogoutClick}>
                Sair
              </a>
            </div>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
