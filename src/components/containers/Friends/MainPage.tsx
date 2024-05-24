import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {userApi} from 'services/apis/userAPI';
import {COLORS} from 'themes/COLORS';
import {FriendWeight} from '../UserStatistics/FriendWeight';
import {FriendCPFC} from './FriendCPFC';
import {MainHeader} from './MainHeader';

type Navigation = NativeStackNavigationProp<FriendsParamList, 'MainPage'>;

interface ResponseFriends {
  _id: string;
  friends: {
    _id: string;
    username: string;
  }[];
}

export const MainPage = () => {
  const [friends, setFriends] = useState<UserFriends[]>([]);

  const {getUserFriends} = userApi();
  const {username, _id, target_details, required_macros} = useAppSelector(
    state => state.user.user,
  );

  const navigation = useNavigation<Navigation>();

  function navigateToFriendsList() {
    navigation.navigate('FriendsList', {friends});
  }

  function navigateToFriendRequests() {
    navigation.navigate('FriendRequests', {_id});
  }

  useEffect(() => {
    getUserFriends(_id).then((data: ResponseFriends) =>
      setFriends(data.friends),
    );
  }, []);

  return (
    <View style={styles.mainContainer}>
      <MainHeader
        friends={friends}
        friendsReq={1}
        onFriendsListPress={navigateToFriendsList}
        onFriendRequestsPress={navigateToFriendRequests}
        username={username}
      />
      <FriendWeight
        currentWeight={target_details.currentWeight}
        targetWeight={target_details.targetWeight}
        startWeigth={target_details.startWeight}
      />
      <FriendCPFC nutrients={required_macros as any} />
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
