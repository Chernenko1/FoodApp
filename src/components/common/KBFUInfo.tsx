import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {LineInfoCard} from './Cards/LineInfoCard';
import {AppText} from './AppText';

export const KBFUInfo = ({
  calories,
  carbohydrates,
  dietaryFiber = 0,
  fat,
  protein,
  water = 0,
}: Nutrients) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <AppText fontWeight="bold" size={30}>
        Пищевая ценность
      </AppText>
      <View style={[styles.infoView, {backgroundColor: colors.card}]}>
        <LineInfoCard nameText="Калории" infoText={calories + ' ккал'} />
        <LineInfoCard nameText="Белки" infoText={protein + ' г'} />
        <LineInfoCard nameText="Жиры" infoText={fat + ' г'} />
        <LineInfoCard nameText="Углеводы" infoText={carbohydrates + ' г'} />
        <LineInfoCard nameText="Вода" infoText={water + ' мл'} />
        <LineInfoCard nameText="Клетчатка" infoText={dietaryFiber + ' г'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  infoView: {
    paddingVertical: 10,
    borderRadius: 10,
    rowGap: 10,
    elevation: 2,
  },
});
