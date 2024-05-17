import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CBFU} from './CBFU';
import {useTheme} from '@react-navigation/native';
import {RemainingCaloriesRing} from './RemainingСaloriesRing';
import {useAppSelector} from '../../../../store/hooks';

export const BasicEnergyInfo = () => {
  const {colors} = useTheme();

  const {required_macros} = useAppSelector(state => state.user.user);
  const {carbohydrates, fat, protein} = useAppSelector(
    state => state.meals.meals.info.nutrients,
  );
  return (
    <SafeAreaView style={[styles.mainView, {backgroundColor: colors.card}]}>
      <RemainingCaloriesRing />
      <View style={styles.cbfuView}>
        <CBFU
          count={carbohydrates ?? 0}
          maxCount={required_macros.carbohydrates}
          title="Углеводы"
        />
        <CBFU
          count={protein ?? 0}
          maxCount={required_macros.protein}
          title="Белки"
        />
        <CBFU count={fat ?? 0} maxCount={required_macros.fat} title="Жиры" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    rowGap: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    elevation: 5,
  },
  cbfuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
