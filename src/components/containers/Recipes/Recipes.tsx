import {AppText} from 'components/common/AppText';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PopularRecipeCategories} from './PopularRecipeCategories';
import {PopularRecipes} from './PopularRecipes';
import {SearchInput} from 'components/common/SearchInput';

export const Recipes = () => {
  const inset = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {paddingTop: inset.top, paddingBottom: 60},
      ]}>
      <AppText style={styles.headerText} fontWeight="bold">
        Рецепты
      </AppText>
      <SearchInput />
      <PopularRecipeCategories />
      <PopularRecipes />
    </ScrollView>
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
