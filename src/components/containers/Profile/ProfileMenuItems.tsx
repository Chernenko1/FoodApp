import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';

import {ProfileMenuItem} from './ProfileMenuItem';

type Navigation = NativeStackNavigationProp<ProfileParamList, 'StackProfile'>;

export const ProfileMenuItems = () => {
  const navigation: Navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <ProfileMenuItem
        title="Персональные данные"
        icon="person-outline"
        onPress={() => navigation.navigate('UserDetails')}
      />
      <ProfileMenuItem
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
