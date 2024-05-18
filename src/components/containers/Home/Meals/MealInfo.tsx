import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {ButtonIcon} from 'components/common/Buttons/ButtonIcon';
import {DropdownCard} from 'components/common/Cards/DropdownCard';
import {ProductCard} from 'components/containers/Product/ProductCard';
import {useDeleteProductInMealMutation} from 'store/services/mealsService';
import {COLORS} from 'themes/COLORS';
import {AppText} from 'components/common/AppText';

type Navigation = NativeStackScreenProps<HomeParamList, 'MealInfo'>;

export const MealInfo = ({navigation, route}: Navigation) => {
  const {headerTitle, mealType} = route.params;

  const meals = useAppSelector(state => state.meals.meals);
  const [deleteProduct] = useDeleteProductInMealMutation();

  const {colors} = useTheme();

  function handleDeleteButton(
    objectId: string,
    productType: ProductType,
    nutrients: Nutrients,
    vitamins: Vitamins,
    minerals: Minerals,
  ) {
    deleteProduct({
      mealId: meals._id,
      objectId,
      mealType: mealType,
      productType,
      data: {
        nutrients,
        minerals,
        vitamins,
      },
    });
  }

  function navigateToFoodCard(
    product: MealProduct,
    productType: 'food' | 'recipe',
  ) {
    navigation.navigate('FoodChange', {mealType, productType, product});
  }

  function navigateToSearch() {
    navigation.navigate('Search', {
      mealType,
      productType: 'food',
    });
  }

  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
      headerStyle: {backgroundColor: COLORS.deepOrange},
      headerTintColor: COLORS.white,
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <SafeAreaView
      style={[styles.mainView, {backgroundColor: colors.background}]}>
      {meals[mealType].products.length !== 0 && (
        <DropdownCard title="Продукты" startPosition={true}>
          <FlatList
            data={meals[mealType].products}
            keyExtractor={(item, ind) => item._id + `${ind}`}
            renderItem={({item}) => (
              <View style={styles.productView}>
                <ProductCard
                  productName={item.name}
                  productQuantity={item.weight}
                  kcal={item.calories}
                  onIconPress={() =>
                    handleDeleteButton(
                      item.objectId,
                      'food',
                      item.nutrients,
                      item.vitamins,
                      item.minerals,
                    )
                  }
                  onCardPress={() => navigateToFoodCard(item, 'food')}
                />
              </View>
            )}
          />
        </DropdownCard>
      )}
      {meals[mealType].recipes.length !== 0 && (
        <DropdownCard title="Рецепты" startPosition={true}>
          <FlatList
            data={meals[mealType].recipes}
            keyExtractor={(item, ind) => item._id + `${ind}`}
            renderItem={({item}) => (
              <View style={styles.productView}>
                <ProductCard
                  productName={item.name}
                  productQuantity={item.weight}
                  kcal={item.nutrients.calories}
                  onIconPress={() =>
                    handleDeleteButton(
                      item.objectId,
                      'recipe',
                      item.nutrients,
                      item.vitamins,
                      item.minerals,
                    )
                  }
                  onCardPress={() => navigateToFoodCard(item, 'recipe')}
                />
              </View>
            )}
          />
        </DropdownCard>
      )}

      <View style={styles.addIconView}>
        <ButtonIcon
          name="add-outline"
          size={40}
          backgroundColor={COLORS.deepOrange}
          onPress={navigateToSearch}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  productView: {
    marginTop: 10,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  addIconView: {
    position: 'absolute',
    bottom: 60,
    right: 0,
  },
});
