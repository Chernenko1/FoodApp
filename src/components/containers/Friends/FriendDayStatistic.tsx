import {useTheme} from '@react-navigation/native';
import {AppText} from 'components/common/AppText';
import {ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {COLORS} from 'themes/COLORS';

interface Props {
  meal: MealInfo;
}

export const FriendDayStatistic = ({meal}: Props) => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  const data = [
    {
      name: 'Белки',
      population: meal.nutrients.protein,
      color: COLORS.lightGray,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Жиры',
      population: meal.nutrients.fat,
      color: COLORS.yellow,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Углеводы',
      population: meal.nutrients.carbohydrates,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Вода',
      population: meal.nutrients.water,
      color: 'blue',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Клетчатка',
      population: meal.nutrients.dietaryFiber,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppText style={styles.headerText} size={24} fontWeight="bold">
        Статистика пользователя на сегодняшний день
      </AppText>
      <PieChart
        style={{...styles.chart, backgroundColor: colors.card}}
        data={data}
        width={width * 0.85}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'0'}
        center={[10, 0]}
        absolute
      />
      <AppText size={20} style={styles.headerText}>
        Количество употребленных калорий - {meal.totalCalories}
      </AppText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    rowGap: 10,
  },
  chart: {
    borderRadius: 15,
    elevation: 3,
  },
  headerText: {
    textAlign: 'center',
  },
});
