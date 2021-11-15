import axios from 'axios';
import useAuth from './useAuth';
const useAxios = () => {
  const { token } = useAuth();
  const axiosConfig = {
    baseURL: process.env.REACT_APP_BACKEND_LINK,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };
  return axios.create(axiosConfig);
};

export default useAxios;
