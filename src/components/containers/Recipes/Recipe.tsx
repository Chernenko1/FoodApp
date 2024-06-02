import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';
import {fetchRecipe, recipeApi} from 'services/apis/recipeAPI';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {RecipeIngredients} from './RecipeIngredients';
import {RecipeInstruction} from './RecipeInstruction';
import {RecipeServing} from './RecipeServing';
import {Button} from 'components/common/Buttons/Button';
import {DropdownCard} from 'components/common/Cards/DropdownCard';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {COLORS} from 'themes/COLORS';
import {ButtonIcon} from 'components/common/Buttons/ButtonIcon';
import {
  addFavouriteRecipe,
  deleteFavouriteRecipe,
  deleteUserRecipe,
} from 'store/slices/recipesSlice';

type Navigation = NativeStackScreenProps<RecipesParamList, 'Recipe'>;

export const Recipe = ({navigation, route}: Navigation) => {
  const [recipe, setRecipe] = useState<Recipe>();

  const userId = useAppSelector(state => state.user.user._id);
  const dispatch = useAppDispatch();

  const {
    postFavourite,
    deleteFromFavourite,
    deleteRecipe,
    error,
    isError,
    isLoading,
  } = recipeApi();

  useEffect(() => {
    fetchRecipe(route.params._id, userId)
      .then(data => setRecipe(data))
      .catch(e => console.log(e));
  }, []);

  function addToFavourite() {
    postFavourite(userId, recipe?._id as string)
      .then(_ => {
        setRecipe({...(recipe as Recipe), isFavourite: true});
        dispatch(
          addFavouriteRecipe({
            _id: recipe?._id as string,
            description: recipe?.description,
            isFavourite: true,
            name: recipe?.name,
          }),
        );
      })
      .catch(e => console.log(e));
  }

  function deleteFavourite() {
    deleteFromFavourite(userId, recipe?._id as string)
      .then(_ => {
        setRecipe({...(recipe as Recipe), isFavourite: false}),
          dispatch(deleteFavouriteRecipe(recipe?._id));
      })
      .catch(e => console.log(e));
  }

  function deteRecipe() {
    deleteRecipe(recipe?._id as string).then(_ => {
      dispatch(deleteFavouriteRecipe(recipe?._id));
      dispatch(deleteUserRecipe(recipe?._id));
      navigation.goBack();
    });
  }

  function navigateToFoodCard(id: string) {
    navigation.navigate('FoodAdd', {
      id,
      productType: 'recipe',
    });
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => deleteButton(),
    });
  }, [recipe]);

  function deleteButton() {
    if (recipe?.isCreate) {
      return <ButtonIcon name="trash-outline" size={24} onPress={deteRecipe} />;
    } else {
      return <></>;
    }
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
            <View style={styles.mainViewInner}>
              <AppText style={styles.headerText} fontWeight="bold" size={30}>
                {recipe.name}
              </AppText>
              <Icon
                name={recipe.isFavourite ? 'bookmark' : 'bookmark-outline'}
                color={COLORS.orange}
                size={24}
                onPress={() =>
                  recipe.isFavourite ? deleteFavourite() : addToFavourite()
                }
              />
            </View>
            <AppText numberOfLines={2}>{recipe.description}</AppText>

            <RecipeServing
              cookTime={recipe.cookTime}
              service={recipe.service}
              weight={recipe.weight}
            />
          </View>

          <View></View>

          <View style={styles.stepView}>
            <DropdownCard title="Пищевая ценность">
              <KBFUCard nutrients={recipe.nutrients} />
            </DropdownCard>

            <DropdownCard title="Ингредиенты">
              <RecipeIngredients ingredients={recipe.ingredients} />
            </DropdownCard>

            <DropdownCard title="Способ приготовления">
              <RecipeInstruction instruction={recipe.instruction} />
            </DropdownCard>
          </View>

          <View style={styles.stepView}>
            <Button
              title="Изменить вес рецепта"
              onPress={() => navigateToFoodCard(recipe._id)}
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
  mainViewInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 5,
  },
});
