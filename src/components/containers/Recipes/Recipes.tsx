import {AppText} from 'components/common/AppText';
import {StyleSheet, View} from 'react-native';
import {Search} from '../Search/Search';
import {PopularRecipeCategories} from './PopularRecipeCategories';
import {PopularRecipes} from './PopularRecipes';
import {SearchInput} from 'components/common/SearchInput';

export const Recipes = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headerText} fontWeight="bold">
        Рецепты
      </AppText>
      <SearchInput />
      <PopularRecipeCategories />
      <PopularRecipes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    rowGap: 15,
  },
  headerText: {
    fontSize: 48,
  },
});
