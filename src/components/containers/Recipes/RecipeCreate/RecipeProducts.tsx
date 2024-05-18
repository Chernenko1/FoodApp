import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {TextButton} from 'components/common/Buttons/TextButton';
import {LineInfoCard} from 'components/common/Cards/LineInfoCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {NewRecipeContext} from './NewRecipeContext';

type Navigation = NativeStackNavigationProp<RecipesParamList, 'RecipeCreate'>;
type Route = RouteProp<RecipesParamList, 'RecipeCreate'>;

interface IRecipeIngredients {
  setRecipeIngredients: (ingredients: {id: string; name: string}[]) => void;
  setIsValid: (isValid: boolean) => void;
}

export const RecipeProducts = ({
  setRecipeIngredients,
  setIsValid,
}: IRecipeIngredients) => {
  const context = useContext(NewRecipeContext);

  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  const {colors} = useTheme();

  useEffect(() => {
    if (route.params?.products) {
      setRecipeIngredients([...context.ingredients, route.params.products]);
      navigation.setParams({products: undefined});
    }
  }, [route.params.products]);

  useEffect(() => {
    if (context.ingredients.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [context.ingredients]);

  function navigateToSearch() {
    navigation.navigate('SearchProductForRecipe');
  }

  function deleteProductFromIngredients(id: string) {
    const filterIngredients = context.ingredients.filter(
      item => item.id !== id,
    );
    setRecipeIngredients(filterIngredients);
  }
  return (
    <View style={styles.mainContainer}>
      {context.ingredients.map((item, index) => (
        <View key={index} style={styles.productContainer}>
          <View style={[styles.productView, {backgroundColor: colors.card}]}>
            <LineInfoCard
              nameText={item.name}
              infoText={item.weight}
              key={item.id}
            />
          </View>
          <Icon
            name="close-outline"
            size={35}
            onPress={() => deleteProductFromIngredients(item.id)}
          />
        </View>
      ))}

      <TextButton
        title="Добавить продукт"
        onPress={navigateToSearch}
        size={22}
        style={{textAlign: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    rowGap: 20,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  productView: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 3,
  },
});
