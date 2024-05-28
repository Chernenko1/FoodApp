import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {UserStatistic} from 'components/containers/UserStatistic/UserStatistic';
import {UserWeekStatistic} from 'components/containers/UserStatistic/UserWeekStatistic';
import {UserWeightStatistic} from 'components/containers/UserStatistic/UserWeightStatistic';
import {UserDayStatistic} from 'components/containers/UserStatistic/UserDayStatistic';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

const Stack = createNativeStackNavigator<StatisticParamList>();

export const StatisticStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen name="StatisticStack" component={UserStatistic} />
      <Stack.Screen name="UserWeekStatistic" component={UserWeekStatistic} />
      <Stack.Screen
        name="UserWeigthStatistic"
        component={UserWeightStatistic}
      />
      <Stack.Screen name="UserDayStatistic" component={UserDayStatistic} />
    </Stack.Navigator>
  );
};
