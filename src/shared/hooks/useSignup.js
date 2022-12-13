import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSignup } from '../../api/userApi';
import { QueryKey } from '../constants';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const navigate = useNavigate();
  const cxt = useContext(AppContext);
  const queryClient = useQueryClient();

  return useMutation(postSignup, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 201) {
        throw new Error(data.response.data.message);
      }
      cxt.login(data.user.id);
      queryClient.invalidateQueries([QueryKey.USER]);
      navigate(`/`);
    },
    onError(err) {
      cxt.modalToggle(err.message || 'Something went wrong, please try again.');
    },
  });
}

export default useSignup;