import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postNewPlace } from '../../api/placeApi';
import { QueryKey } from '../constants';
import { useNavigate } from 'react-router-dom';

const useNewPlace = () => {
  const cxt = useContext(AppContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(postNewPlace, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 201) {
        throw new Error(data.response.data.message);
      }
      queryClient.invalidateQueries([QueryKey.USER]);
      queryClient.invalidateQueries([QueryKey.PLACES, cxt.userId]);
      navigate('/');
    },
    onError(err) {
      cxt.modalToggle(err.message || 'Something went wrong, please try again.');
    },
  });
}

export default useNewPlace;