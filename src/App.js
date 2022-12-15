import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useCallback } from 'react';

import {useAuth} from './shared/hooks/auth-hook'

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AppContext } from './shared/context/AppContext'
import ErrorModal from './shared/components/UIElements/ErrorModal';
import LoadingSpinner from 'shared/components/UIElements/LoadingSpinner';
import SuspenseWrapper from 'shared/components/Navigation/SuspenseWrapper'

// import Users from './user/pages/Users';
// import UserPlaces from './places/pages/UserPlaces';
// import UpdatePlace from './places/pages/UpdatePlace';
// import NewPlaces from './places/pages/NewPlaces';
// import Authenticate from './user/pages/Authenticate';


function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContents, setModalContents] = useState(null) 
  const { token, login, logout, userId } = useAuth();
  
  const modalToggle = useCallback((contents) => {
    setModalShow(prev => !prev);
    if(contents)setModalContents(contents);
  }, [])

  let routes;

  if(token) {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<SuspenseWrapper path={'user/pages/Users'} />} />
        <Route exact path="/:userId/places" element={<SuspenseWrapper path={'places/pages/UserPlaces'} />}/>
        <Route exact path="/places/new" element={<SuspenseWrapper path={'places/pages/NewPlaces'} />} />
        <Route path="/places/:placeId" element={<SuspenseWrapper path={'places/pages/UpdatePlace'} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<SuspenseWrapper path={'user/pages/Users'} />} />
        <Route exact path="/:userId/places" element={<SuspenseWrapper path={'places/pages/UserPlaces'} />}/>
        <Route path="/auth" element={<SuspenseWrapper path={'user/pages/Authenticate'} />} />
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
