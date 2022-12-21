import { IUserData } from 'shared/types/User';
import UserItem from './UserItem';
import { Card } from '../../shared/components/UIElements';
import './UsersList.css';

function UsersList({ users }: { users: IUserData[] }) {
  if (users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user: IUserData) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          places={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList;
