import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { postNewPlace } from '../../api/placeApi';
import { QueryKey, ERROR } from '../constants';

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
      if (err instanceof Error) {
        cxt.modalToggle(err.message || ERROR.DEFAULT);
      }
    },
  });
};

export default useNewPlace;
