import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppText} from 'components/common/AppText';
import {VitMixCard} from 'components/common/Cards/VitMinCard';
import {ScrollView, StyleSheet, View, useWindowDimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {COLORS} from 'themes/COLORS';

type Navigation = NativeStackScreenProps<
  StatisticParamList,
  'UserDayStatistic'
>;

export const UserDayStatistic = ({navigation, route}: Navigation) => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  const {stat} = route.params;

  const data = [
    {
      name: 'Белки',
      population: stat.nutrients.protein,
      color: COLORS.lightGray,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Жиры',
      population: stat.nutrients.fat,
      color: COLORS.yellow,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Углеводы',
      population: stat.nutrients.carbohydrates,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Вода',
      population: stat.nutrients.water,
      color: 'blue',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Клетчатка',
      population: stat.nutrients.dietaryFiber,
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
        Ваша дневная статистика {stat.date}
      </AppText>
      <PieChart
        style={{...styles.chart, backgroundColor: colors.card}}
        data={data}
        width={width * 0.93}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'0'}
        center={[10, 0]}
        absolute
      />

      <AppText size={20} style={styles.headerText}>
        Необходимое количество калорий - {stat.necessaryCalories}
      </AppText>
      <AppText size={20} style={styles.headerText}>
        Количество употребленных калорий - {stat.totalCalories}
      </AppText>

      <AppText style={styles.headerText} size={24} fontWeight="bold">
        Минералы и витамины
      </AppText>
      <VitMixCard vitamins={stat.vitamins} minerals={stat.minerals} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 65,
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
