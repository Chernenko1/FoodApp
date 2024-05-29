import {useAppSelector} from 'store/hooks';

export const useAuth = () => {
  const email = useAppSelector(state => state.user.user?.email);
  return {
    isAuth: !!email,
  };
};
