import React from 'react';
import { useParams } from 'react-router-dom';
import useGetPlacesByUser from '../../shared/hooks/useGetPlacesByUser';
import { LoadingSpinner } from '../../shared/components/UIElements';
import PlaceList from '../components/PlaceList';

function UserPlaces() {
  const { userId } = useParams();

  const { isLoading, data } = useGetPlacesByUser(userId);

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && data.place && <PlaceList items={data} />}
    </>
  );
}

export default UserPlaces;
