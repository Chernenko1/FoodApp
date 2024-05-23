import {Image, Pressable, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';

interface IUserHeader {
  username: string;
  friends: UserFriends[];
  onPress: () => void;
}

export const UserHeader = ({friends, username, onPress}: IUserHeader) => {
  return (
    <View style={styles.userHeaderView}>
      <Image
        style={styles.userImage}
        source={require('../../../../assets/images/noImage.jpg')}
      />
      <AppText fontWeight="bold" size={30}>
        {username}
      </AppText>
      <Pressable style={styles.headerFriendsView} onPress={onPress}>
        <AppText>{friends.length}</AppText>
        <AppText>Друзья</AppText>
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
