import {AppText} from 'components/common/AppText';
import {Button} from 'components/common/Buttons/Button';
import {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {userApi} from 'services/apis/userAPI';
import {useAppSelector} from 'store/hooks';
import {COLORS} from 'themes/COLORS';
import {UserWeightStatistic} from '../UserStatistics/UserWeightStatistic';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {UserHeader} from './UserHeader';

type Navigation = NativeStackNavigationProp<FriendsParamList, 'MainPage'>;

export const MainPage = () => {
  const [friends, setFriends] = useState<Friends[]>([]);

  const {loading, error, getUserFriends} = userApi();
  const {details, username, _id, target_details} = useAppSelector(
    state => state.user.user,
  );

  const navigation = useNavigation<Navigation>();

  function navigateToFriendsList() {
    navigation.navigate('FriendsList', {friends});
  }

  useEffect(() => {
    getUserFriends(_id).then((data: {friends: Friends[]}) =>
      setFriends(data.friends),
    );
  }, []);

  return (
    <View style={styles.mainContainer}>
      <UserHeader
        friends={friends}
        onPress={navigateToFriendsList}
        username={username}
      />
      <UserWeightStatistic
        currentWeight={target_details.currentWeight}
        targetWeight={target_details.targetWeight}
        startWeigth={target_details.startWeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  userHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.orange,
  },
  userHeaderInner: {},
  headerFriendsView: {
    alignItems: 'center',
  },
});
