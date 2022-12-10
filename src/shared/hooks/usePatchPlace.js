import { useContext } from 'react'
import { patchPlace } from '../../api/placeApi'

import { AppContext } from '../context/AppContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKey } from '../constants';
import { useNavigate } from 'react-router-dom';

const usePatchPlace = () => {
  const cxt = useContext(AppContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(patchPlace, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 201) {
        throw new Error(data.response.data.message);
      }
      queryClient.invalidateQueries([QueryKey.PLACES, cxt.userId]);
      navigate(`/${cxt.userId}/places`);
    },
    onError(err) {
      cxt.modalToggle(err.message || 'Something went wrong, please try again.');
    },
  });
}

export default usePatchPlace;