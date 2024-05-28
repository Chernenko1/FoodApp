import {StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';
import {UserInfo} from '../Profile/UserComponents/UserInfo';
import {AppText} from 'components/common/AppText';
import {UserStatisticMenuItems} from './UserStatisticMenuItems';

export const UserStatistic = () => {
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
      <UserStatisticMenuItems />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
});
