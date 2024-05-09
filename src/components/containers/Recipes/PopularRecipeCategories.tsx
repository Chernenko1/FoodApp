import {AppText} from 'components/common/AppText';
import {useEffect, useState} from 'react';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchRecipeCategories} from 'services/apis/recipeCategoriesAPI';
import {COLORS} from 'themes/COLORS';

export const PopularRecipeCategories = () => {
  const [categories, setCategories] = useState<RecipeCategories[]>();

  useEffect(() => {
    fetchRecipeCategories()
      .then(data => setCategories(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <View>
      <View style={styles.popularView}>
        <View style={styles.popularHeader}>
          <AppText style={styles.headerTitel} fontWeight="medium">
            Популярные категории
          </AppText>
          <Pressable style={styles.link}>
            <AppText style={[styles.text, styles.headerTextLink]}>
              Все категории
            </AppText>
            <Icon
              name="chevron-forward-outline"
              size={18}
              color={COLORS.orange}
            />
          </Pressable>
        </View>
        <View style={styles.categoriesView}>
          {categories?.slice(0, 2).map(item => (
            <ImageBackground
              key={item._id}
              source={require('../../../../assets/images/noImage.jpg')}
              blurRadius={10}
              style={styles.image}>
              <AppText style={styles.imageText} fontWeight="medium">
                {item.name}
              </AppText>
            </ImageBackground>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 4,
  },
  popularView: {
    rowGap: 20,
  },
  popularHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {},
  headerTitel: {
    fontSize: 20,
  },
  headerTextLink: {
    fontSize: 15,
    color: COLORS.deepOrange,
  },
  categoriesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 15,
  },
  imageText: {
    fontSize: 30,
    color: COLORS.white,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
