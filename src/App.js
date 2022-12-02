import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import NewPlaces from './places/pages/NewPlaces';

import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/:userId/places" element={<UserPlaces />}/>
          <Route exact path="/places/new" element={<NewPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
