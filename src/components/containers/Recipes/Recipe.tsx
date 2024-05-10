import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';
import {fetchRecipe} from 'services/apis/recipeAPI';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {RecipeIngredients} from './RecipeIngredients';
import {RecipeInstruction} from './RecipeInstruction';
import {RecipeServing} from './RecipeServing';
import {Button} from 'components/common/Buttons/Button';
import {DropdownCard} from 'components/common/Cards/DropdownCard';

type Navigation = NativeStackScreenProps<RecipesParamList, 'Recipe'>;

export const Recipe = ({navigation, route}: Navigation) => {
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    fetchRecipe(route.params._id)
      .then(data => setRecipe(data))
      .catch(e => console.log(e));
  }, []);

  function navigateToFoodCard(
    micmacNutrients: {
      nutrients: Nutrients;
      minerals: Minerals;
      vitamins: Vitamins;
    },
    weight: number,
    _id: string,
    name: string,
  ) {
    navigation.navigate('FoodCard', {micmacNutrients, weight, _id, name});
  }

  return (
    recipe && (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/noImage.jpg')}
        />

        <View style={styles.innerContainer}>
          <View style={styles.mainView}>
            <AppText style={styles.headerText} fontWeight="bold" size={30}>
              {recipe.recipe.name}
            </AppText>
            <AppText numberOfLines={2}>{recipe.recipe.description}</AppText>

            <RecipeServing
              cookTime={recipe.recipe.cookTime}
              service={recipe.recipe.service}
              weight={recipe.recipe.weight}
            />
          </View>

          <View style={styles.stepView}>
            <DropdownCard title="Пищевая ценность">
              <KBFUCard nutrients={recipe.nutrients} />
            </DropdownCard>

            <DropdownCard title="Ингредиенты">
              <RecipeIngredients ingredients={recipe.recipe.ingredients} />
            </DropdownCard>

            <DropdownCard title="Способ приготовления">
              <RecipeInstruction instruction={recipe.recipe.instruction} />
            </DropdownCard>
          </View>

          <View style={styles.stepView}>
            <Button
              title="Добавить"
              onPress={() =>
                navigateToFoodCard(
                  {
                    nutrients: recipe.nutrients,
                    minerals: recipe.minerals,
                    vitamins: recipe.vitamins,
                  },
                  recipe.recipe.weight,
                  recipe.recipe._id,
                  recipe.recipe.name,
                )
              }
            />
          </View>
        </View>
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 70,
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  innerContainer: {},
  mainView: {
    paddingTop: 20,
    rowGap: 10,
  },
  servingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stepView: {
    marginTop: 20,
    rowGap: 10,
  },
  headerText: {
    lineHeight: 35,
    letterSpacing: 1,
  },
  button: {
    marginTop: 10,
  },
});
