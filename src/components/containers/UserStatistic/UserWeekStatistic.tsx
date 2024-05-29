import {useTheme} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {AppText} from 'components/common/AppText';
import {DatePicker} from '../Home/DatePicker';
import {formatDate} from 'utils/formDate';
import {useGetMealsStatisticQuery} from 'store/services/mealsService';
import {LineInfoCard} from 'components/common/Cards/LineInfoCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Navigation = NativeStackScreenProps<
  StatisticParamList,
  'UserWeekStatistic'
>;

export const UserWeekStatistic = ({navigation, route}: Navigation) => {
  const [firstDate, setFirstDate] = useState(formatDate(new Date()));
  const [secondDate, setSecondDate] = useState(formatDate(new Date()));

  const {_id: id, required_macros} = useAppSelector(state => state.user.user);

  const {colors} = useTheme();

  const {isError, isFetching, refetch, error, data} = useGetMealsStatisticQuery(
    {firstDate, id, secondDate},
  );

  function handleDate(date: string) {
    setFirstDate(date);
    let year = parseInt(date.slice(0, 4));
    let month = parseInt(date.slice(5, 7)) - 1;
    let day = parseInt(date.slice(8, 10));
    let secondDate = new Date(year, month, day);
    secondDate.setDate(secondDate.getDate() + 6);
    let resDay: number | string = secondDate.getDate();
    resDay = resDay < 10 ? `0${resDay}` : resDay;

    let resMonth: number | string = secondDate.getMonth() + 1;
    resMonth = resMonth < 10 ? `0${resMonth}` : resMonth;
    let resYear = secondDate.getFullYear();

    setSecondDate(`${resYear}-${resMonth}-${resDay}`);
  }

  function navigateToDayStat(item: any) {
    navigation.navigate('UserDayStatistic', {stat: item});
  }

  useEffect(() => {
    refetch();
  }, [firstDate]);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View>
          <AppText fontWeight="medium" size={24}>
            Вашa статистика
          </AppText>
        </View>
        <View style={styles.headerInner}>
          <AppText>с</AppText>
          <DatePicker handleDate={handleDate} />
          <AppText>по {secondDate}</AppText>
        </View>
      </View>

      {isFetching && <AppText>Loading...</AppText>}

      {data && data.length === 0 && (
        <AppText size={24} fontWeight="medium">
          Похоже, что у нас нет записей за этот период ;(
        </AppText>
      )}

      {data && data.length !== 0 && (
        <View style={[styles.CPFCStatView]}>
          <AppText fontWeight="medium" size={28} style={styles.CPFCHeaderText}>
            Было употреблено калорий
          </AppText>
          {data.map((item, index) => (
            <Pressable
              style={[styles.statView, {backgroundColor: colors.card}]}
              onPress={() => {
                navigateToDayStat(item);
              }}>
              <LineInfoCard
                nameText={item.date.slice(5, 10)}
                infoText={item.totalCalories}
                key={index}
              />
            </Pressable>
          ))}
          <AppText size={24}>
            Необходимое количество калорий - {required_macros.calories * 7}
          </AppText>
          <AppText size={24}>
            Количество употребленных калорий -
            {data.reduce(
              (prevVal, curVal) => prevVal + curVal.totalCalories,
              0,
            )}
          </AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerView: {
    alignItems: 'center',
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  CPFCStatView: {
    rowGap: 15,
  },
  CPFCHeaderText: {
    textAlign: 'center',
  },
  statView: {
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 3,
  },
});
