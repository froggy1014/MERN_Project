import React from 'react';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import UsersList from '../components/UsersList';
import useGetUser from '../../shared/hooks/useGetUser';

const Users = () => {

  const { isLoading, data } = useGetUser();

  return (
    <React.Fragment>
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && data.users && <UsersList user={data.users} />}
    </React.Fragment>

  )
};

export default Users;
