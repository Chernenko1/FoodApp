import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {AppText} from 'components/common/AppText';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {getProduct} from 'services/apis/productAPI';
import {fetchRecipe} from 'services/apis/recipeAPI';
import {mealsAPI} from 'store/services/mealsService';
import {calculateNutritionalValue} from 'utils/calculateNutritionalValue';
import {FoodCardButtons} from './FoodCardButtons';

type Navigation =
  | NativeStackScreenProps<RecipesParamList, 'FoodAdd'>
  | NativeStackScreenProps<HomeParamList, 'FoodAdd'>;

export const FoodAddCard = ({navigation, route}: Navigation) => {
  const {id, mealType, productType} = route.params;
  const [product, setProduct] = useState<Product>();
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState('');

  const date = useAppSelector(state => state.app.date);
  const userId = useAppSelector(state => state.user.user._id);

  const [addToMeal] = mealsAPI.useAddProductToMealMutation();

  const {colors} = useTheme();

  function handleButtonAdd() {
    setDisabled(true);
    addToMeal({
      date,
      mealType,
      productType,
      userId,
      data: {
        id,
        weight: +value,
        name: product?.name as string,
        nutrients,
        vitamins,
        minerals,
      },
    })
      .then(_ => {
        navigation.pop(2);
      })
      .catch(e => {
        console.log('Card', e);
        setDisabled(false);
      });
  }

  const nutrients =
    product &&
    calculateNutritionalValue(product.nutrients, product.weight, value);

  const vitamins =
    product &&
    calculateNutritionalValue(product.vitamins, product.weight, value);

  const minerals =
    product &&
    calculateNutritionalValue(product.minerals, product.weight, value);

  useEffect(() => {
    if (productType === 'food') {
      getProduct(id).then((data: Product) => {
        setProduct(data);
        setValue(String(data.weight));
      });
    } else if (productType === 'recipe') {
      fetchRecipe(id).then((data: Recipe) => {
        setProduct(data);
        setValue(String(data.weight));
      });
    } else {
      console.log('Не был передан тип продукта!');
    }
  }, []);

  if (product) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <AppText fontWeight="bold" size={24}>
          {product.name}
        </AppText>

        <View style={[styles.inputContainer, {backgroundColor: colors.card}]}>
          <View style={styles.inputView}>
            <AppText>Вес: </AppText>
            <AppTextInput
              value={value}
              onChangeText={text => setValue(text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputView}>
            <AppText>Единица измерений: </AppText>
            <AppText>граммы</AppText>
          </View>
        </View>

        <FoodCardButtons
          action="add"
          onPressAdd={handleButtonAdd}
          disabled={disabled}
        />
        <KBFUCard nutrients={nutrients} />
      </ScrollView>
    );
  } else {
    <View style={styles.container}>
      <AppText>Загружаем данные...</AppText>
    </View>;
  }
};

const styles = StyleSheet.create({
  container: {
    rowGap: 15,
    paddingTop: 10,
    paddingBottom: 70,
    paddingHorizontal: 15,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    rowGap: 10,
    borderRadius: 10,
    elevation: 2,
  },
});
