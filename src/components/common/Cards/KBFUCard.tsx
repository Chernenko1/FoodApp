import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {LineInfoCard} from './LineInfoCard';

interface IKBFUCard {
  nutrients: Nutrients;
}

export const KBFUCard = ({nutrients}: IKBFUCard) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.infoView, {backgroundColor: colors.card}]}>
        <LineInfoCard
          nameText="Калории"
          infoText={nutrients.calories + ' ккал'}
        />
        <LineInfoCard nameText="Белки" infoText={nutrients.protein + ' г'} />
        <LineInfoCard nameText="Жиры" infoText={nutrients.fat + ' г'} />
        <LineInfoCard
          nameText="Углеводы"
          infoText={nutrients.carbohydrates + ' г'}
        />
        <LineInfoCard nameText="Вода" infoText={nutrients.water + ' мл'} />
        <LineInfoCard
          nameText="Клетчатка"
          infoText={nutrients.dietaryFiber + ' г'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  infoView: {
    paddingVertical: 10,
    borderRadius: 10,
    rowGap: 10,
    elevation: 2,
  },
});
