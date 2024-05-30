import {AppText} from 'components/common/AppText';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {PopularRecipes} from './PopularRecipes';
import {SearchInput} from 'components/common/SearchInput';

type Navigation = NativeStackNavigationProp<RecipesParamList, 'Search'>;

export const Recipes = () => {
  const inset = useSafeAreaInsets();

  const navigation = useNavigation<Navigation>();

  function navigateToSearch() {
    navigation.navigate('Search', {
      productType: 'recipe',
    });
  }
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {paddingTop: inset.top, paddingBottom: 60},
      ]}>
      <AppText style={styles.headerText} fontWeight="bold">
        Рецепты
      </AppText>
      <SearchInput onPress={navigateToSearch} />
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
