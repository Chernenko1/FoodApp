import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../../../store/hooks';

import {CircleProgressBar} from '../../../common/Charts/CircleProgressBar';
import {Calories} from './Calories';

export const RemainingCaloriesRing = () => {
  const data = useAppSelector(state => state.meals.meals);

  const progress = Math.round(
    ((data.info.totalCalories ?? 1) * 100) / (data.info.necessaryCalories ?? 1),
  );

  return (
    <View style={styles.caloriesView}>
      <Calories
        type="Съедено"
        count={data?.info.totalCalories ?? 0}
        icon="open"
      />
      <View style={[styles.progressBarWrapper]}>
        <CircleProgressBar progress={progress ? progress : 0.1} />
        <View style={styles.progressText}>
          <Calories
            type="Осталось"
            count={
              (data.info.necessaryCalories ?? 0) -
              (data?.info.totalCalories ?? 0)
            }
          />
        </View>
      </View>
      <Calories type="Сожжено" count={536} icon="open" />
    </View>
  );
};

const styles = StyleSheet.create({
  caloriesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    bottom: '25%',
    left: '44%',
    transform: [{translateX: -20}, {translateY: -12}],
  },
});
