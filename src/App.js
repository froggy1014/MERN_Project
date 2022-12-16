import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useCallback, Suspense, lazy } from 'react';

import {useAuth} from './shared/hooks/auth-hook'

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AppContext } from './shared/context/AppContext'
import ErrorModal from './shared/components/UIElements/ErrorModal';
import LoadingSpinner from 'shared/components/UIElements/LoadingSpinner';

const Users = lazy(() => import('./user/pages/Users'));
const UserPlaces = lazy(() => import('./places/pages/UserPlaces'));
const UpdatePlace = lazy(() => import('./places/pages/UpdatePlace'));
const NewPlaces = lazy(() => import('./places/pages/NewPlaces'));
const Authenticate = lazy(() => import('./user/pages/Authenticate'));


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

  <Routes>
    {routes}
  </Routes>

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
         <Suspense fallback={<div classname="center"><LoadingSpinner /></div>}>
            <Routes>
              {routes}
            </Routes>
         </Suspense>
        </main>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
