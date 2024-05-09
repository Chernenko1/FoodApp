import {AppText} from 'components/common/AppText';
import {StyleSheet, View} from 'react-native';

interface IRecipeServing {
  cookTime: string;
  weight: number;
  service: number;
}

export const RecipeServing = ({cookTime, service, weight}: IRecipeServing) => {
  return (
    <View>
      <View style={styles.servingView}>
        <AppText fontWeight="bold">Времня готовки</AppText>
        <AppText>{cookTime} минут</AppText>
      </View>
      <View style={styles.servingView}>
        <AppText fontWeight="bold">Вес</AppText>
        <AppText>{weight} г</AppText>
      </View>
      <View style={styles.servingView}>
        <AppText fontWeight="bold">Количество персон</AppText>
        <AppText>{service} чел.</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
