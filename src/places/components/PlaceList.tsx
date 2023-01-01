import { IQueryPlaceData, TPlaceDetail } from 'shared/types/Place';

import { Card } from '../../shared/components/UIElements';
import Button from '../../shared/components/FormElements/Button';
import PlaceItem from './PlaceItem';

function PlaceList({ items }: { items: IQueryPlaceData }) {
  if (items.place.length === 0) {
    return (
      <div className="list-none my-4 mx-auto p-0 w-11/12 h-screen max-w-160 center">
        <Card>
          <h2 className="mb-4">No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="list-none my-4 mx-auto p-0 w-11/12 max-w-160">
      {items.place.map((place: TPlaceDetail) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creator={place.creator}
          location={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
