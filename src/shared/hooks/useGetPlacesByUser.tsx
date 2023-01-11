import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { getPlacesByUser } from '../../api/placeApi';
import { QueryKey, ERROR } from '../constants';

const useGetPlacesByUser = (uid: string | undefined) => {
  const cxt = useContext(AppContext);
  const navigate = useNavigate();
  return useQuery([QueryKey.PLACES, uid], () => getPlacesByUser(uid), {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 200) {
        cxt.modalToggle(data.response.data.message || ERROR.DEFAULT);
        navigate('/');
      }
    },
    onError(err) {
      if (err instanceof Error) cxt.modalToggle(err.message || ERROR.DEFAULT);
    },
  });
};

export default useGetPlacesByUser;
