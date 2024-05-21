import {StyleSheet, View} from 'react-native';
import {UserHeader} from './UserHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {userApi} from 'services/apis/userAPI';
import {useAppSelector} from 'store/hooks';
import {AppText} from 'components/common/AppText';
import {UserWeightStatistic} from '../UserStatistics/UserWeightStatistic';
import {friendsRequestMessage} from 'constants/friendsRequestMessage';

type Navigation = NativeStackScreenProps<FriendsParamList, 'FriendPage'>;

interface Request {
  user: User;
  message:
    | 'USER_HIDE_DATA_FROM_ALL_USERS'
    | 'USER_HIDE_DATA_FROM_UNFRIENDS'
    | 'ALL_USER_DATA';
}

export const FriendPage = ({navigation, route}: Navigation) => {
  const [user, setUser] = useState<Request>();

  const {id} = route.params;
  const {_id} = useAppSelector(state => state.user.user);

  const {loading, error, getFriendData} = userApi();

  function navigateToFriendsList() {
    navigation.push('FriendsList', {friends: user?.user.friends as Friends[]});
  }

  useEffect(() => {
    getFriendData(_id, id).then(data => setUser(data));
  }, [navigation]);

  if (loading) {
    return (
      <View style={{alignItems: 'center'}}>
        <AppText fontWeight="bold" size={48}>
          Loading...
        </AppText>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <AppText>Возникла ошибка повторите позже</AppText>
      </View>
    );
  }

  if (user && !loading && !error) {
    return (
      <View style={styles.mainContainer}>
        <UserHeader
          friends={user.user.friends}
          username={user.user.username}
          onPress={navigateToFriendsList}
        />

        {user.message === 'ALL_USER_DATA' ? (
          <UserWeightStatistic
            currentWeight={user.user.target_details.currentWeight}
            startWeigth={user.user.target_details.startWeight}
            targetWeight={user.user.target_details.targetWeight}
          />
        ) : (
          <AppText>{friendsRequestMessage[user.message]}</AppText>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
});
