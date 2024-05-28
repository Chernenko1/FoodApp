import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {MenuItem} from '../Profile/MenuItem';

type Navigation = NativeStackNavigationProp<
  StatisticParamList,
  'StatisticStack'
>;

export const UserStatisticMenuItems = () => {
  const navigation: Navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <MenuItem
        title="Ваша статистика"
        icon="person-outline"
        onPress={() => navigation.push('UserWeekStatistic')}
      />
      <MenuItem
        title="Ваш вес"
        icon="pie-chart-outline"
        onPress={() => navigation.navigate('UserWeigthStatistic')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {},
});
