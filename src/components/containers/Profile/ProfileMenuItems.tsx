import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch} from 'store/hooks';

import {MenuItem} from './MenuItem';
import {COLORS} from 'themes/COLORS';
import {setUser} from 'store/slices/userSlice';

type Navigation = NativeStackNavigationProp<SettingsParamList, 'SettingsStack'>;

export const ProfileMenuItems = () => {
  const navigation: Navigation = useNavigation();

  const dispatch = useAppDispatch();

  function unLogin() {
    dispatch(setUser({}));
  }

  return (
    <View style={styles.mainView}>
      <View>
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
        <MenuItem
          title="Настройка приватности"
          icon="lock-closed-outline"
          onPress={() => navigation.navigate('KBFUSettings')}
        />
        <MenuItem title="Выйти" icon="exit-outline" onPress={unLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingBottom: 65,
    justifyContent: 'space-between',
  },
  exitButton: {
    textAlign: 'center',
    color: COLORS.red,
  },
});
