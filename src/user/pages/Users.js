import React, { useEffect, useState } from 'react';

import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import UsersList from '../components/UsersList';
import useGetUser from '../../shared/hooks/useGetUser';

const Users = () => {

  const { isLoading, data} = useGetUser();

  return (
    <React.Fragment>
      {isLoading && (
        <div>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && data && <UsersList user={data.users} />}
    </React.Fragment>

  )
};

export default Users;
