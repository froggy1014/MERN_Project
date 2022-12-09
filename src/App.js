import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import NewPlaces from './places/pages/NewPlaces';
import Authenticate from './user/pages/Authenticate';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AppContext } from './shared/context/AppContext'
import ErrorModal from './shared/components/UIElements/ErrorModal';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalContents, setModalContents] = useState(null) 

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  const modalToggle = useCallback((contents) => {
    setModalShow(prev => !prev);
    if(contents)setModalContents(contents);
  }, [])

  let routes;

  if(isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />}/>
        <Route exact path="/places/new" element={<NewPlaces />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/:userId/places" element={<UserPlaces />}/>
        <Route path="/auth" element={<Authenticate />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <AppContext.Provider value={{
        isLoggedIn: isLoggedIn, 
        login: login, 
        logout:logout,
        modalToggle: modalToggle,
        }}>
        <MainNavigation />
        <main>
        {modalShow && <ErrorModal error={modalContents} onClear={modalToggle} />}
          <Routes>
            {routes}
          </Routes>
        </main>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
