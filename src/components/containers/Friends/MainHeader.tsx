import {Image, Pressable, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface IUserHeader {
  username: string;
  friends: UserFriends[];
  friendsReq: number;
  onFriendsListPress: () => void;
  onFriendRequestsPress: () => void;
}

type Navigate = NativeStackScreenProps<FriendsParamList>;

export const MainHeader = ({
  friends,
  friendsReq,
  username,
  onFriendsListPress,
  onFriendRequestsPress,
}: IUserHeader) => {
  return (
    <View style={styles.userHeaderView}>
      <Image
        style={styles.userImage}
        source={require('../../../../assets/images/noImage.jpg')}
      />
      <AppText fontWeight="bold" size={30}>
        {username}
      </AppText>
      <Pressable style={styles.headerFriendsView} onPress={onFriendsListPress}>
        <AppText>{friends.length}</AppText>
        <AppText>Друзья</AppText>
      </Pressable>
      <Pressable
        style={styles.headerFriendsView}
        onPress={onFriendRequestsPress}>
        <AppText>{friendsReq}</AppText>
        <AppText>Запросы</AppText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  userHeaderInner: {},
  headerFriendsView: {
    alignItems: 'center',
  },
});
