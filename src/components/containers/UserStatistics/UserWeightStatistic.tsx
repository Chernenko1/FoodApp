import {AppText} from 'components/common/AppText';
import {CircleProgressBar} from 'components/common/Charts/CircleProgressBar';
import {StyleSheet, View} from 'react-native';

interface IUserWeightStatistic {
  startWeigth: number;
  currentWeight: number;
  targetWeight: number;
}

export const UserWeightStatistic = ({
  currentWeight,
  startWeigth,
  targetWeight,
}: IUserWeightStatistic) => {
  let progress =
    ((currentWeight - startWeigth) / (targetWeight - startWeigth)) * 100;
  progress = progress < 0 ? progress * -1 : progress;

  return (
    <View style={styles.mainView}>
      <View style={styles.weightView}>
        <View style={styles.weightInfo}>
          <AppText>Начальный вес: {startWeigth}кг</AppText>
          <AppText>Цель: {targetWeight}кг</AppText>
        </View>
        <View>
          <View style={styles.progressView}>
            <AppText size={50}>{currentWeight}</AppText>
            <AppText
              style={{position: 'relative', top: -20}}
              size={30}
              fontWeight="medium">
              кг
            </AppText>
          </View>
          <CircleProgressBar progress={progress + 1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 10,
  },
  weightView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  weightInfo: {
    width: '50%',
  },
  progressView: {
    position: 'absolute',
    top: 40,
    right: 60,
    alignItems: 'center',
  },
});
