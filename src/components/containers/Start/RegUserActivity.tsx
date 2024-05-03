import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../../common/AppText';
import {Button} from '../../common/Buttons/Button';
import {UserActivityItem} from '../Profile/UserComponents/UserActivityItem';

type Navigation = NativeStackScreenProps<AuthParamList>;

export const RegUserActivity = ({navigation, route}: Navigation) => {
  const [value, setValue] = useState<number>();

  return (
    <View style={styles.mainView}>
      <AppText style={styles.text}>Ваша ежедневная активность</AppText>
      <View style={styles.activityView}>
        <UserActivityItem
          title="Низкая активность"
          description="Легкие физические нагрузки либо занятия 1-3 раз в неделю, 5к шагов"
          status={value === 0 ? true : false}
          onPress={() => setValue(0)}
        />
        <UserActivityItem
          title="Умеренная активность"
          description="Занятия 6 раз в неделю, 10к шагов"
          status={value === 1 ? true : false}
          onPress={() => setValue(1)}
        />
        <UserActivityItem
          title="Высокая активность"
          description="Интенсивные нагрузки, занятия 7 раз в неделю, 25к шагов"
          status={value === 2 ? true : false}
          onPress={() => setValue(2)}
        />
        <UserActivityItem
          title="Очень высокая активность"
          description="Олимпийские спортсмены и люди, выполняющие сходные нагрузки"
          status={value === 3 ? true : false}
          onPress={() => setValue(3)}
        />
      </View>
      <Button
        style={styles.button}
        title="Далее"
        onPress={() =>
          navigation.navigate('Registration', {
            ...route.params,
            activity: value,
          })
        }
        color={COLORS.orange}
        textColor={COLORS.black}
        disabled={typeof value === 'undefined'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  activityView: {
    marginTop: 15,
    paddingHorizontal: 15,
    rowGap: 10,
  },
  text: {
    fontSize: 25,
  },
  button: {
    width: '70%',
  },
});
