import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';

import {MenuItem} from './MenuItem';

type Navigation = NativeStackNavigationProp<SettingsParamList, 'Settings'>;

export const ProfileMenuItems = () => {
  const navigation: Navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <MenuItem
        title="Персональные данные"
        icon="person-outline"
        onPress={() => navigation.push('UserDetails')}
      />
      <MenuItem
        title="Настройка KБЖУ"
        icon="pie-chart-outline"
        onPress={() => navigation.navigate('KBFUSettings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {},
});
