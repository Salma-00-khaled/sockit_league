import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { context: { user } = {} } = useContext(AuthContext) || {};
  return (user && user?._id && user?.isActivated) || false;
};
