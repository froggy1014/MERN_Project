import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { delPlace } from '../../api/placeApi';
import { QueryKey } from '../constants';

const useDeletePlace = () => {
  const cxt = useContext(AppContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(delPlace, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 201) {
        throw new Error(data.response.data.message);
      }
      queryClient.invalidateQueries([QueryKey.USER]);
      queryClient.invalidateQueries([QueryKey.PLACES, cxt.userId]);
      navigate(`/${cxt.userId}/places`);
    },
    onError(err) {
      if (err instanceof Error)
        cxt.modalToggle(
          err.message || 'Something went wrong, please try again.',
        );
    },
  });
};

export default useDeletePlace;
