import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import UsersList from '../components/UsersList';
import useGetUser from '../../shared/hooks/useGetUser';

function Users() {
  const { isLoading, data } = useGetUser();

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && data.users && <UsersList users={data.users} />}
    </>
  );
}

export default Users;
