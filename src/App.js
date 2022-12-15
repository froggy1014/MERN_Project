import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import NewPlaces from './places/pages/NewPlaces';
import Authenticate from './user/pages/Authenticate';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AppContext } from './shared/context/AppContext'
import ErrorModal from './shared/components/UIElements/ErrorModal';


let logoutTimer ; 

function App() {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalContents, setModalContents] = useState(null) 


  
  const login = useCallback((uid, access_token, expirationDate) => {
    setToken(access_token);
    setUserId(uid)
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem('userData', JSON.stringify({userId: uid, accessToken: access_token, expiration: tokenExpirationDate.toISOString()}));
  }, [])
  
  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null)
    localStorage.removeItem('userData');
  }, [])
  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.accessToken && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.accessToken, new Date(storedData.expiration));
    }
  }, [login])

  useEffect(() => {
    if(token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logout, tokenExpirationDate])

  const modalToggle = useCallback((contents) => {
    setModalShow(prev => !prev);
    if(contents)setModalContents(contents);
  }, [])

  let routes;

  if(token) {
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
        isLoggedIn: !!token, 
        token : token,
        userId : userId,
        login: login,
        logout: logout,
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
