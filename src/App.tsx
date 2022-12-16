import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useCallback, Suspense, lazy, useMemo } from 'react';
import './App.css';

import LoadingSpinner from 'shared/components/UIElements/LoadingSpinner';
import { useAuth } from './shared/hooks/useAuth';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AppContext } from './shared/context/AppContext';
import ErrorModal from './shared/components/UIElements/ErrorModal';

const Users = lazy(() => import('./user/pages/Users'));
const UserPlaces = lazy(() => import('./places/pages/UserPlaces'));
const UpdatePlace = lazy(() => import('./places/pages/UpdatePlace'));
const NewPlaces = lazy(() => import('./places/pages/NewPlaces'));
const Authenticate = lazy(() => import('./user/pages/Authenticate'));

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContents, setModalContents] = useState<string | null>(null);
  const { token, login, logout, userId } = useAuth();

  const modalToggle = useCallback((contents: string) => {
    setModalShow((prev) => !prev);
    if (contents) setModalContents(contents);
  }, []);

  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlaces />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Authenticate />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </>
    );
  }

  <Routes>{routes}</Routes>;

  const ctxVariables = useMemo(
    () => ({ isLoggedIn: !!token, token, userId, login, logout, modalToggle }),
    [token, userId, login, logout],
  );

  return (
    <AppContext.Provider value={ctxVariables}>
      <MainNavigation />
      <main>
        {modalShow && (
          <ErrorModal error={modalContents} onClear={modalToggle} />
        )}
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>{routes}</Routes>
        </Suspense>
      </main>
    </AppContext.Provider>
  );
}

export default App;
