import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {AppText} from 'components/common/AppText';
import {friendsRequestMessage} from 'constants/friendsRequestMessage';
import {friendsApi} from 'services/apis/friendsAPI';
import {userApi} from 'services/apis/userAPI';
import {FriendWeight} from '../UserStatistics/FriendWeight';
import {FriendButton} from './FriendButton';
import {UserHeader} from './UserHeader';
import {FriendCPFC} from './FriendCPFC';

type Navigation = NativeStackScreenProps<FriendsParamList, 'FriendPage'>;

interface RequestUser extends User {
  friends: Friends;
}
interface Request {
  user: RequestUser;
  message:
    | 'USER_HIDE_DATA_FROM_ALL_USERS'
    | 'USER_HIDE_DATA_FROM_UNFRIENDS'
    | 'ALL_USER_DATA'
    | 'USER_HIDE_CPFC'
    | 'USER_HIDE_WEIGHT';
}

export const FriendPage = ({navigation, route}: Navigation) => {
  const [data, setData] = useState<Request>();

  const {id} = route.params;
  const {_id} = useAppSelector(state => state.user.user);

  const {loading, error, getFriendData} = userApi();
  const {deleteFromFriends, addToFriends, deleteFriendReq, acceptFriendReq} =
    friendsApi();

  function navigateToFriendsList() {
    navigation.push('FriendsList', {
      friends: data?.user.friends.friends as UserFriends[],
    });
  }

  function deleteFriend() {
    deleteFromFriends(_id, data?.user._id as string)
      .then(_ => console.log(_))
      .catch(e => console.log(e));
    getData();
  }

  function addFriend() {
    addToFriends(_id, data?.user._id as string);
    getData();
  }

  function deleteRequest() {
    deleteFriendReq(data?.user._id as string, _id)
      .then(_ => console.log(1))
      .catch(e => console.log(e));
    getData();
  }

  function acceptRequest() {
    acceptFriendReq(_id, data?.user._id as string)
      .then(_ => console.log(1))
      .catch(e => console.log(e));
    getData();
  }

  function getData() {
    getFriendData(_id, id).then(data => setData(data));
  }

  useEffect(() => {
    getData();
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

  if (data && !loading && !error) {
    return (
      <View style={styles.mainContainer}>
        <UserHeader
          friends={data.user.friends.friends}
          username={data.user.username}
          onPress={navigateToFriendsList}
        />
        <FriendButton
          friends={data.user.friends}
          _id={_id}
          friendId={data.user._id}
          acceptRequest={acceptRequest}
          addFriend={addFriend}
          deleteFriend={deleteFriend}
          deleteRequest={deleteRequest}
        />
        <View>
          {data.user?.required_macros && (
            <FriendCPFC nutrients={data.user.required_macros as any} />
          )}
          {data.user?.target_details && (
            <FriendWeight
              currentWeight={data.user.target_details.currentWeight}
              startWeigth={data.user.target_details.startWeight}
              targetWeight={data.user.target_details.targetWeight}
            />
          )}
        </View>
        {(data.message === 'USER_HIDE_DATA_FROM_ALL_USERS' ||
          data.message === 'USER_HIDE_DATA_FROM_UNFRIENDS') && (
          <AppText style={styles.warningText}>
            {friendsRequestMessage[data.message]}
          </AppText>
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

  warningText: {
    textAlign: 'center',
  },
});
