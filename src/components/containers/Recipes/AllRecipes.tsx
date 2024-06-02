import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AppText} from 'components/common/AppText';
import {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import {recipeApi} from 'services/apis/recipeAPI';
import {useAppSelector} from 'store/hooks';

type Navigation = NativeStackScreenProps<RecipesParamList, 'AllRecipes'>;

export const AllRecipes = ({navigation, route}: Navigation) => {
  const [recipes, setRecipes] = useState<Recipe[]>();

  const userId = useAppSelector(state => state.user.user._id);
  const {func, title} = route.params;

  const {getCreatedRecipes, getFavourite, isError, isLoading, error} =
    recipeApi();

  useEffect(() => {
    if (func === 'crt') {
      getCreatedRecipes(userId).then(data => setRecipes(data[0].recipes));
    } else if (func === 'fav') {
      getFavourite(userId).then(data => setRecipes(data));
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({headerTitle: title});
  }, []);

  function navigateToRecipe(_id: string) {
    navigation.push('Recipe', {_id});
  }

  return (
    <View style={styles.container}>
      <View style={styles.recipeContainer}>
        {recipes?.map(item => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 10, paddingHorizontal: 15},
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
