import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { postSignup } from '../../api/userApi';
import { QueryKey, ERROR } from '../constants';

const useSignup = () => {
  const navigate = useNavigate();
  const cxt = useContext(AppContext);
  const queryClient = useQueryClient();

  return useMutation(postSignup, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 201) {
        throw new Error(data.response.data.message);
      }
      cxt.login(data.userId, data.accessToken);
      queryClient.invalidateQueries([QueryKey.USER]);
      navigate(`/`);
    },
    onError(err) {
      if (err instanceof Error) {
        cxt.modalToggle(err.message || ERROR.DEFAULT);
      }
    },
  });
};

export default useSignup;
