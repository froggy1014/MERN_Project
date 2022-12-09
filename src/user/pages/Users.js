import React, { useEffect, useState } from 'react';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import UsersList from '../components/UsersList';
import { getUsers } from '../../api/userApi';
import { useQuery } from '@tanstack/react-query';

import { QueryKey } from '../../shared/constants';

const Users = () => {
  const [user, setUser] = useState();
  const [errorModal, setErrorModal] = useState();


  const { isLoading, data, error, isError } = useQuery([QueryKey.USER], getUsers)

  useEffect(() => {
    if(data) setUser(data.users)
    setErrorModal(isError)
  }, [data, isError])
  

  return (
    <React.Fragment>
      { errorModal && <ErrorModal error={error} onClear={() => setErrorModal(false)} />}
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && user && <UsersList user={user} />}
    </React.Fragment>

  )
};

export default Users;
