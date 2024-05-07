import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {updateUserDetails} from '../../../../services/apis/userAPI';
import {setUser} from '../../../../store/slices/userSlice';
import {AppText} from '../../../common/AppText';
import {UserActivityItem} from './UserActivityItem';

type NavProps = NativeStackScreenProps<ProfileParamList, 'UserActivity'>;

export const UserActivity = ({navigation}: NavProps) => {
  const {details, _id} = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Уровень активности',
    });
  }, []);
  const saveData = async (activity: number) => {
    await updateUserDetails({
      id: _id,
      data: activity,
      type: 'activity',
      updateMacros: true,
    }).then((data: User) => dispatch(setUser(data)));
  };

  return (
    <View style={styles.activityView}>
      <AppText style={styles.text}>Ваша ежедневная активность</AppText>
      <UserActivityItem
        title="Низкая активность"
        description="Легкие физические нагрузки либо занятия 1-3 раз в неделю, 5к шагов"
        status={details.activity === 0 ? true : false}
        onPress={() => saveData(0)}
      />
      <UserActivityItem
        title="Умеренная активность"
        description="Занятия 6 раз в неделю, 10к шагов"
        status={details.activity === 1 ? true : false}
        onPress={() => saveData(1)}
      />
      <UserActivityItem
        title="Высокая активность"
        description="Интенсивные нагрузки, занятия 7 раз в неделю, 25к шагов"
        status={details.activity === 2 ? true : false}
        onPress={() => saveData(2)}
      />
      <UserActivityItem
        title="Очень высокая активность"
        description="Олимпийские спортсмены и люди, выполняющие сходные нагрузки"
        status={details.activity === 3 ? true : false}
        onPress={() => saveData(3)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityView: {
    marginTop: 15,
    paddingHorizontal: 15,
    rowGap: 10,
  },
  text: {
    fontSize: 15,
  },
});
