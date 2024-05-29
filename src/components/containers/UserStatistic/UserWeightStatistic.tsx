import {useTheme} from '@react-navigation/native';
import {FlatList, StyleSheet, View, useWindowDimensions} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {AppText} from 'components/common/AppText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'themes/COLORS';
import {UserWeightStatisticHeader} from './UserWeightStatisticHeader';

export const UserWeightStatistic = () => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  const weightData = useAppSelector(
    state => state.user.user.target_details.weightStatistic,
  );

  const dataForRender = [...weightData];

  const chartLabel = weightData.map(item => item.day);
  const chartData = weightData.map(item => item.weight);

  const data = {
    labels: chartLabel,
    datasets: [
      {
        data: chartData,
        color: (opacity = 1) => COLORS.teal, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: colors.card,
    backgroundGradientTo: colors.card,
    color: (opacity = 1) => COLORS.purple,
  };

  function weightComparison(
    weight_1: number | undefined,
    weight_2: number | undefined,
  ) {
    if (weight_1 === undefined || weight_2 === undefined) {
      return {name: 'remove-outline', color: COLORS.orange};
    } else if (weight_1 === weight_2) {
      return {name: 'reorder-two-outline', color: COLORS.yellow};
    } else if (weight_1 > weight_2) {
      return {name: 'arrow-up-outline', color: COLORS.teal};
    } else {
      return {name: 'arrow-down-outline', color: COLORS.red};
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={dataForRender.reverse()}
          ListHeaderComponent={UserWeightStatisticHeader}
          keyExtractor={(item, idx) => item.day + idx}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={[styles.weightView, {backgroundColor: colors.card}]}>
              <AppText size={24}>{item.day}</AppText>
              <View style={styles.weightViewInner}>
                <AppText size={24}>{item.weight}</AppText>
                <Icon
                  name={
                    weightComparison(
                      dataForRender[index].weight,
                      dataForRender[index + 1]?.weight,
                    ).name
                  }
                  color={
                    weightComparison(
                      dataForRender[index].weight,
                      dataForRender[index + 1]?.weight,
                    ).color
                  }
                  size={30}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  chartView: {
    paddingHorizontal: 0,
  },
  listContainer: {
    flex: 1,
    paddingBottom: 60,
  },
  weightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    elevation: 3,
  },
  weightViewInner: {
    flexDirection: 'row',
    columnGap: 10,
  },
});
