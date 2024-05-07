import React from 'react';
import {useAppSelector} from '../store/hooks';

import {BottomNavigation} from './BottomNavigation';
import {StartStackNavigation} from './Stacks/AuthStackNavigation';

export const AppNavigator = () => {
  const {isAuth} = useAppSelector(state => state.auth);

  return isAuth ? <BottomNavigation /> : <StartStackNavigation />;
};
