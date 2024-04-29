import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {HomeParamList} from '../../../screens/HomeStack';
import {COLORS} from '../../../themes/COLORS';
import {ProductCard} from '../../ProductComponent/ProductCard';
import {ButtonIcon} from '../../components/ButtonIcon';
import {getMealData} from '../../../http/mealAPI';
import {MealInfoHeader} from './MealInfoHeader';
import {useTheme} from '@react-navigation/native';
import {useAppSelector} from '../../../store/hooks';
import {mealsAPI} from '../../../store/services/mealsService';

type Navigation = NativeStackScreenProps<HomeParamList, 'MealInfo'>;

interface IProduct {
  _id: string;
  quantity: string;
  product: Product;
}

export const MealInfo = ({navigation, route}: Navigation) => {
  const {headerTitle, mealType} = route.params;

  const [products, setProducts] = useState<IProduct[]>();

  const {_id} = useAppSelector(state => state.meals.meals);
  const [useDeleteProductInMeal] = mealsAPI.useDeleteProductInMealMutation();

  const {colors} = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
      headerStyle: {backgroundColor: COLORS.deepOrange},
      headerTintColor: COLORS.white,
      headerTitleAlign: 'center',
    });
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () =>
      getMealData(_id, mealType)
        .then(data => setProducts(data))
        .catch(e => console.log(e)),
    );
  }, []);

  const deleteProduct = (cardId: string) => {
    useDeleteProductInMeal({mealId: _id, id: cardId, type: mealType});
  };

  return (
    <SafeAreaView
      style={[styles.mainView, {backgroundColor: colors.background}]}>
      <FlatList
        ListHeaderComponent={<MealInfoHeader />}
        data={products}
        keyExtractor={(item, ind) => item._id + `${ind}`}
        renderItem={({item}) => (
          <View style={styles.productView}>
            <ProductCard
              productName={item.product.name}
              productQuantity={item.quantity}
              kcal={item.product.nutrients.calories}
              productId={item.product._id}
              onIconPress={() => deleteProduct(item._id)}
              onCardPress={() => {
                navigation.navigate('ProductInfo', {
                  mealType,
                  func: 'update',
                  productData: {
                    ...item.product,
                    quantity: item.quantity,
                    cardId: item._id,
                  } as ProductInfo,
                });
              }}
            />
          </View>
        )}
      />
      <View style={styles.addIconView}>
        <ButtonIcon
          name="add-outline"
          size={40}
          backgroundColor={COLORS.deepOrange}
          onPress={() =>
            navigation.navigate('Search', {
              backScreen: route.name,
              screenParams: {mealType},
            })
          }
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
