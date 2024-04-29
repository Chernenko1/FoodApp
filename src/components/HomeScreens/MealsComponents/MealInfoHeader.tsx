import {StyleSheet, View} from 'react-native';
import {Calories} from '../EnergyInfoComonents/Calories';
import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../../components/AppText';
import {CircleProgressBar} from '../../components/Charts/CircleProgressBar';

export const MealInfoHeader = () => {
  return (
    <View style={styles.headerView}>
      <View style={[styles.progressBarWrapper]}>
        <CircleProgressBar progress={70 ? 70 : 0.1} />
        <View style={styles.progressText}>
          <Calories type="Осталось" count={(3000 ?? 0) - (2500 ?? 0)} />
        </View>
      </View>
      <View style={styles.dateView}>
        <AppText style={styles.dateText}>08 месяц 2024</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: COLORS.deepOrange,
  },
  dateView: {
    top: 15,
  },
  dateText: {
    fontSize: 20,
    color: COLORS.white,
  },
  progressBarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    position: 'absolute',
    fontSize: 24,
  },
});
