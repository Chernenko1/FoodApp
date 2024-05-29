import React from 'react';
import {useAppSelector} from '../store/hooks';

import {BottomNavigation} from './BottomNavigation';
import {StartStackNavigation} from './Stacks/AuthStackNavigation';
import {useAuth} from 'hooks/useAuth';

export const AppNavigator = () => {
  const {isAuth} = useAuth();

  return isAuth ? <BottomNavigation /> : <StartStackNavigation />;
};
