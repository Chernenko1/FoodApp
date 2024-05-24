import {Image, Pressable, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from 'components/common/Buttons/Button';
import {COLORS} from 'themes/COLORS';
import {useNavigation} from '@react-navigation/native';

interface IUserHeader {
  username: string;
  friends: UserFriends[];
  friendsReq: number;
  onFriendsListPress: () => void;
  onFriendRequestsPress: () => void;
}

type Navigate = NativeStackNavigationProp<FriendsParamList, 'MainPage'>;

export const MainHeader = ({
  friends,
  friendsReq,
  username,
  onFriendsListPress,
  onFriendRequestsPress,
}: IUserHeader) => {
  const navigation = useNavigation<Navigate>();

  function navigateToSettings() {
    navigation.navigate('Settings');
  }

  return (
    <View style={styles.userHeaderView}>
      <View style={styles.userHeaderInner}>
        <Image
          style={styles.userImage}
          source={require('../../../../assets/images/noImage.jpg')}
        />
        <AppText fontWeight="bold" size={30}>
          {username}
        </AppText>
        <Pressable
          style={styles.headerFriendsView}
          onPress={onFriendsListPress}>
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
      <View style={styles.headerButtonView}>
        <Button
          title="Настройки"
          color={COLORS.lightGray}
          onPress={navigateToSettings}
        />
      </View>
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
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  userHeaderInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButtonView: {
    alignItems: 'flex-end',
    // justifyContent: '',
  },
  headerButton: {},
  headerFriendsView: {
    alignItems: 'center',
  },
});
