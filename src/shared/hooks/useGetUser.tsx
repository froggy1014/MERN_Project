import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { getUsers } from '../../api/userApi';
import { QueryKey, ERROR } from '../constants';

const useGetUser = () => {
  const cxt = useContext(AppContext);
  const navigate = useNavigate();
  return useQuery([QueryKey.USER], getUsers, {
    onSuccess(data) {
      if (data.response !== undefined && data.response.status !== 200) {
        cxt.modalToggle(data.response.data.message || ERROR.DEFAULT);
        navigate('/auth');
      }
    },
    onError(err) {
      if (err instanceof Error) {
        cxt.modalToggle(err.message || ERROR.DEFAULT);
      }
    },
  });
};

export default useGetUser;
