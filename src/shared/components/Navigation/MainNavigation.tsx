import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { MainHeader, NavLinks, SideDrawer } from './index';
import { Backdrop } from '../UIElements';

function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <div className="flex text-center">
          <button onClick={openDrawerHandler}>
            <GiHamburgerMenu className="mx-4 m-auto text-5xl text-white hover:scale-125  duration-200 " />
          </button>
          <h1 className="flex align-center text-2xl md:text-3xl">
            <Link className="no-underline text-white m-auto" to="/">
              YourPlaces
            </Link>
          </h1>
        </div>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
