import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';
import {AppText} from 'components/common/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {userApi} from 'services/apis/userAPI';
import {searchErrors} from 'constants/searchErrors';

interface searchedUser {
  _id: string;
  username: string;
}

type Navigation = NativeStackScreenProps<FriendsParamList, 'SearchUsers'>;

export const UserSearch = ({route, navigation}: Navigation) => {
  const [users, setUsers] = useState<searchedUser[]>([]);
  const [value, setValue] = useState('');

  const {colors} = useTheme();
  const {error, loading, searchUsers} = userApi();

  useEffect(() => {
    searchUsers(value).then(data => setUsers(data));
  }, [value]);

  function navigateToUserPage(id: string) {
    navigation.navigate('FriendPage', {id});
  }

  function navigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color={colors.text}
          onPress={navigateBack}
        />
        <TextInput
          style={[styles.input, {borderColor: colors.border}]}
          value={value}
          onChangeText={text => setValue(text)}
          multiline={true}
        />
      </View>
      <KeyboardAvoidingView behavior="height">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            {loading && <AppText>Loading...</AppText>}
            {!!error && <AppText>{searchErrors[error]}</AppText>}
            {users &&
              !error &&
              users.map(item => (
                <Pressable
                  onPress={() => navigateToUserPage(item._id)}
                  key={item._id}>
                  <AppText>{item.username}</AppText>
                </Pressable>
              ))}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 10,
  },
  containerAnswer: {
    rowGap: 5,
    marginTop: 15,
  },
  containerText: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 0.2,
    borderRadius: 2,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    width: Dimensions.get('screen').width * 0.8,
  },
  text: {
    fontSize: 18,
  },
});
