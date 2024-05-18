import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../../common/AppText';

type FoodNavigation = NativeStackNavigationProp<HomeParamList, 'ProductCreate'>;
type RecipeNavigation = NativeStackNavigationProp<
  RecipesParamList,
  'RecipeCreate'
>;
interface IProsuctNotFound {
  productType: ProductType;
}

export const ProductNotFound = ({productType}: IProsuctNotFound) => {
  const navigation = useNavigation<RecipeNavigation | FoodNavigation>();

  function navigateToProductCreating() {
    if (productType === 'food') {
      navigation.navigate('ProductCreate');
    } else if (productType === 'recipe') {
      navigation.navigate('RecipeCreate', {});
    }
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.titleText}>
        Нет нужного продукта? Добавьте свой
      </AppText>
      <Pressable style={styles.button} onPress={navigateToProductCreating}>
        <AppText style={styles.buttonText}>
          Добавить новый {productType}
        </AppText>
        <Icon name="add-outline" size={20} color={COLORS.deepOrange} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Rubik-Medium',
    color: COLORS.deepOrange,
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
  },
});
