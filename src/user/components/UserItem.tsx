import { IUserData } from 'shared/types/User';
import { Link } from 'react-router-dom';
import { Avatar, Card } from '../../shared/components/UIElements';

function UserItem({ id, name, image, places }: IUserData) {
  return (
    <li className="user-item">
      <Card className="!p-0">
        <Link
          className="flex items-center w-full h-full no-underline p-4 text-white"
          to={`/${id}/places`}
        >
          <div className="w-16 h-16 mr-4">
            <Avatar
              image={process.env.REACT_APP_ASSET_URL + image}
              alt={name}
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg text-6 mt-2">{name}</h2>
            <h3 className="mb-2 text-md m-0">
              {places.length} {places.length === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UserItem;
