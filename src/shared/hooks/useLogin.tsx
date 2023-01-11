import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { postLogin } from '../../api/userApi';
import { QueryKey, ERROR } from '../constants';

const useLogin = () => {
  const cxt = useContext(AppContext);
  const queryClient = useQueryClient();

  return useMutation(postLogin, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 201) {
        throw new Error(data.response.data.message);
      }
      cxt.login(data.userId, data.accessToken);
      queryClient.invalidateQueries([QueryKey.USER]);
    },
    onError(err) {
      if (err instanceof Error) {
        cxt.modalToggle(err.message || ERROR.DEFAULT);
      }
    },
  });
};

export default useLogin;
