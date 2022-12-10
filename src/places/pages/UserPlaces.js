import React from 'react';
import { useParams } from 'react-router-dom';
import useGetPlacesByUser from '../../shared/hooks/useGetPlacesByUser';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const userId = useParams().userId;
  
  const { isLoading, data } = useGetPlacesByUser(userId);

  return (
    <React.Fragment>
      { isLoading && (<div className='center'><LoadingSpinner asOverlay /></div>) }
      {!isLoading && data.place && <PlaceList items={data} />}
    </React.Fragment>
  )
  
}

export default UserPlaces;