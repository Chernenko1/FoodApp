import {Button} from 'components/common/Buttons/Button';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {friendsApi} from 'services/apis/friendsAPI';
import {COLORS} from 'themes/COLORS';

interface FriendButton {
  friends: Friends;
  _id: string;
  friendId: string;
  deleteFriend: () => void;
  addFriend: () => void;
  deleteRequest: () => void;
  acceptRequest: () => void;
}

export const FriendButton = ({
  _id,
  friends,
  friendId,
  acceptRequest,
  addFriend,
  deleteFriend,
  deleteRequest,
}: FriendButton) => {
  const isFriends = friends.friends.find(item => item._id === _id);
  const isRequestToFriends = friends.userResponses.includes(_id);
  const isResponseToFriends = friends.userRequests.includes(_id);

  // const {
  //   error,
  //   loading,
  //   deleteFromFriends,
  //   addToFriends,
  //   deleteFriendReq,
  //   acceptFriendReq,
  // } = friendsApi();

  // function deleteFriend() {
  //   deleteFromFriends(_id, friendId)
  //     .then(_ => console.log(_))
  //     .catch(e => console.log(e));
  // }

  // function addFriend() {
  //   addToFriends(_id, friendId);
  // }

  // function deleteRequest(userId: string, friendId: string) {
  //   deleteFriendReq(friendId, userId)
  //     .then(_ => console.log(1))
  //     .catch(e => console.log(e));
  // }

  // function acceptRequest() {
  //   acceptFriendReq(_id, friendId)
  //     .then(_ => console.log(1))
  //     .catch(e => console.log(e));
  // }

  if (isRequestToFriends && !isResponseToFriends) {
    return (
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Принять в друзья"
          onPress={acceptRequest}
          color={COLORS.orange}
          size={18}
        />
        <Button
          style={styles.button}
          title="Не принимать в друзья"
          onPress={() => deleteRequest()}
          color={COLORS.red}
        />
      </View>
    );
  } else if (isResponseToFriends && !isRequestToFriends) {
    return (
      <Button
        title="Удалить заявку в друзья"
        onPress={() => deleteRequest()}
        color={COLORS.teal}
      />
    );
  } else {
    return (
      <Button
        title={isFriends ? 'Удалить из друзей' : 'Добавить в друзья'}
        onPress={() => (isFriends ? deleteFriend() : addFriend())}
        color={isFriends ? COLORS.red : COLORS.orange}
      />
    );
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    columnGap: 10,
  },
  button: {
    paddingHorizontal: 2,
    flexShrink: 1,
  },
});
