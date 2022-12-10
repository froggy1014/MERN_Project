import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useQuery } from '@tanstack/react-query';
import { getPlacesByUser } from '../../api/placeApi';
import { QueryKey } from '../constants';
import { useNavigate } from 'react-router-dom';

const useGetPlacesByUser = (uid) => {
  const cxt = useContext(AppContext);
  const navigate = useNavigate();
  return useQuery([QueryKey.PLACES, uid], () => getPlacesByUser(uid), {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 200) {
        cxt.modalToggle(data.response.data.message || 'Something went wrong, please try again.');
        navigate('/');
      }
    },
    onError(err) {
      cxt.modalToggle(err.message || 'Something went wrong, please try again.');
    },
  });
}

export default useGetPlacesByUser;