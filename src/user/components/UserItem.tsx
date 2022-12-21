import { IUserData } from 'shared/types/User';
import { Link } from 'react-router-dom';
import { Avatar, Card } from '../../shared/components/UIElements';
import './UserItem.css';

function UserItem({ id, name, image, places }: IUserData) {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar
              image={process.env.REACT_APP_ASSET_URL + image}
              alt={name}
            />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {places.length} {places.length === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
}

export default UserItem;
