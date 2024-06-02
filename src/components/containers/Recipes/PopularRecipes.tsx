import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppText} from 'components/common/AppText';
import {TextButton} from 'components/common/Buttons/TextButton';
import {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchRecipes, recipeApi} from 'services/apis/recipeAPI';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setFavouriteRecipes} from 'store/slices/recipesSlice';
import {COLORS} from 'themes/COLORS';

type Navigation = NativeStackNavigationProp<RecipesParamList, 'RecipesStack'>;

export const PopularRecipes = () => {
  const navigation = useNavigation<Navigation>();
  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.user.user._id);
  const recipes = useAppSelector(state => state.recipes.favouriteRecipes);

  const {getFavourite, isError, isLoading, error} = recipeApi();

  useEffect(() => {
    getFavourite(userId).then(data => dispatch(setFavouriteRecipes(data)));
  }, []);

  function navigateToRecipe(_id: string) {
    navigation.push('Recipe', {_id});
  }

  function navigateToAllRecipes() {
    navigation.push('AllRecipes', {func: 'fav', title: 'Избранные рецепты'});
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <AppText size={24} fontWeight="medium">
          Избранные рецепты
        </AppText>
        <TextButton
          title="Все рецепты ->"
          color={COLORS.orange}
          size={18}
          onPress={navigateToAllRecipes}
        />
      </View>
      {recipes.length !== 0 && (
        <View style={styles.recipeContainer}>
          {recipes.slice(0, 2).map(item => (
            <Pressable
              key={item._id}
              style={styles.recipeView}
              onPress={() => navigateToRecipe(item._id)}>
              <Image
                source={require('../../../../assets/images/noImage.jpg')}
                style={styles.image}
              />
              <View style={styles.descriptionView}>
                <AppText fontWeight="medium" size={24} numberOfLines={1}>
                  {item.name}
                </AppText>
                <AppText
                  style={styles.textDescription}
                  numberOfLines={2}
                  size={18}>
                  {item.description}
                </AppText>
              </View>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 10},
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  recipeContainer: {
    marginTop: 20,
    rowGap: 15,
  },
  recipeView: {
    flexDirection: 'row',
    columnGap: 10,
  },
  descriptionView: {
    justifyContent: 'space-around',
    flexShrink: 1,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  textDescription: {},
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
