import {useTheme} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';
import {DropdownCard} from 'components/common/Cards/DropdownCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from 'react';
import {friendsApi} from 'services/apis/friendsAPI';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable} from 'react-native';

type Navigation = NativeStackScreenProps<FriendsParamList, 'FriendRequests'>;

export const FriendRequests = ({navigation, route}: Navigation) => {
  const [userFriendResponses, setUserFriendResponses] = useState<Friends[]>([]);
  const [userFriendRequests, setUserfriendRequests] = useState<Friends[]>([]);

  const {_id} = route.params;

  const {error, loading, getUserFriendRequests, getUserFriendResponses} =
    friendsApi();

  const {deleteFriendReq, acceptFriendReq} = friendsApi();

  const {colors} = useTheme();
  const iconSize = 30;

  function deleteRequest(userId: string, friendId: string) {
    deleteFriendReq(userId, friendId)
      .then(_ => console.log(1))
      .catch(e => console.log(e));
  }

  function acceptRequest(id: string) {
    acceptFriendReq(_id, id)
      .then(_ => console.log(1))
      .catch(e => console.log(e));
  }

  function navigateToFriendPage(id: string) {
    navigation.navigate('FriendPage', {id});
  }

  useEffect(() => {
    getUserFriendResponses(_id)
      .then(data => (data ? setUserFriendResponses(data.userResponses) : []))
      .catch(e => console.log(e));
    getUserFriendRequests(_id)
      .then(data => (data ? setUserfriendRequests(data.userRequests) : []))
      .catch(e => console.log(e));
    console.log(23);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerInner}>
        <DropdownCard title="Ваши" startPosition={true}>
          {loading && <AppText>Loading...</AppText>}
          {!loading && !error && userFriendResponses.length === 0 && (
            <AppText>У вас нет активных запросов</AppText>
          )}
          {userFriendResponses.map(item => (
            <Pressable
              style={[styles.userCard, {backgroundColor: colors.card}]}
              key={item._id}
              onPress={() => navigateToFriendPage(item._id)}>
              <AppText>{item.username}</AppText>
              <View style={styles.userCardIcons}>
                <Icon
                  name="close-outline"
                  size={iconSize}
                  color={'red'}
                  onPress={() => deleteRequest(item._id, _id)}
                />
              </View>
            </Pressable>
          ))}
        </DropdownCard>
        <DropdownCard title="К вам" startPosition={true}>
          {loading && <AppText>Loading...</AppText>}
          {!loading && !error && userFriendRequests.length === 0 && (
            <AppText>У вас нет активных запросов</AppText>
          )}
          {userFriendRequests.map(item => (
            <Pressable
              style={[styles.userCard, {backgroundColor: colors.card}]}
              onPress={() => navigateToFriendPage(item._id)}>
              <AppText>{item.username}</AppText>
              <View style={styles.userCardIcons}>
                <Icon
                  name="checkmark-outline"
                  size={iconSize}
                  color={'green'}
                  onPress={() => acceptRequest(item._id)}
                />
                <Icon
                  name="close-outline"
                  size={iconSize}
                  color={'red'}
                  onPress={() => deleteRequest(_id, item._id)}
                />
              </View>
            </Pressable>
          ))}
        </DropdownCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
    paddingHorizontal: 15,
  },
  containerInner: {
    rowGap: 15,
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  userCardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
});
