import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
// import './NavLinks.css';

function NavLinks() {
  const ctx = useContext(AppContext);

  return (
    <ul className="nav-link">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {ctx.isLoggedIn && (
        <li>
          <NavLink to={`/${ctx.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!ctx.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <button className="text-white" onClick={ctx.logout}>
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
