import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppText} from 'components/common/AppText';
import {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchRecipes} from 'services/apis/recipeAPI';
import {COLORS} from 'themes/COLORS';

type Navigation = NativeStackNavigationProp<RecipesParamList, 'RecipesStack'>;

export const PopularRecipes = () => {
  const [recipes, setRecipes] = useState<Recipes[]>();

  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    fetchRecipes()
      .then(data => setRecipes(data))
      .catch(e => console.log(e));
  }, []);

  function navigateToRecipe(_id: string) {
    navigation.push('Recipe', {_id});
  }

  return (
    <View style={styles.container}>
      <AppText>Популярные рецепты</AppText>
      <View style={styles.recipeContainer}>
        {recipes?.slice(0, 6).map(item => (
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
                numberOfLines={1}
                size={18}>
                {item.description}
              </AppText>

              <View style={styles.ratingView}>
                <Icon name="restaurant" size={20} color={COLORS.orange} />
                <AppText fontWeight="light" size={18}>
                  {item.rating}
                </AppText>
                <AppText fontWeight="light" size={18}>
                  (326 оценок)
                </AppText>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
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
});
