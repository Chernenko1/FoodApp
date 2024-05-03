import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';

import {AppText} from '../../common/AppText';
import {ProfileMenuItems} from './ProfileMenuItems';
import {UserInfo} from './UserComponents/UserInfo';

export const Profile = () => {
  const user = useAppSelector(state => state.user.user);

  return (
    <View style={styles.mainView}>
      <UserInfo
        username={user.username}
        email={user.email}
        weight={user.details.weight}
        goal={user.details.purpose}
        activity={user.details.activity}
      />
      <AppText>Настройки</AppText>
      <ProfileMenuItems />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
