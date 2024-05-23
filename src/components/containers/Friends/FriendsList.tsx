import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppText} from 'components/common/AppText';
import {TextButton} from 'components/common/Buttons/TextButton';
import {SearchInput} from 'components/common/SearchInput';
import {FlatList, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

type Navigation = NativeStackScreenProps<FriendsParamList, 'FriendsList'>;

export const FriendsList = ({navigation, route}: Navigation) => {
  const {friends} = route.params;

  const {_id} = useAppSelector(state => state.user.user);

  function navigateToFriendPage(id: string) {
    navigation.push('FriendPage', {id});
  }

  function navigateToSearch() {
    navigation.navigate('SearchUsers');
  }

  return (
    <View style={styles.mainContainer}>
      <SearchInput
        placeholder="Поиск пользователей"
        onPress={navigateToSearch}
      />
      <AppText style={styles.headerText} fontWeight="bold" size={38}>
        Друзья:
      </AppText>
      <View style={styles.listView}>
        <FlatList
          data={friends}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TextButton
              title={item.username}
              size={24}
              onPress={() => navigateToFriendPage(item._id)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  listView: {
    // marginTop: 10,
  },
  headerText: {
    paddingVertical: 10,
    textAlign: 'center',
  },
});
