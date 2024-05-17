import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

import {calculateNutritionalValue} from 'utils/calculateNutritionalValue';
import {AppText} from 'components/common/AppText';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {FoodCardButtons} from './FoodCardButtons';
import {
  useDeleteProductInMealMutation,
  useUpdateProductInMealMutation,
} from 'store/services/mealsService';

type Navigation = NativeStackScreenProps<HomeParamList, 'FoodChange'>;

export const FoodChangeCard = ({navigation, route}: Navigation) => {
  const {product, productType, mealType} = route.params;

  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(String(product.weight));

  const mealId = useAppSelector(state => state.meals.meals._id);

  const [deleteProduct] = useDeleteProductInMealMutation();
  const [updateProduct] = useUpdateProductInMealMutation();

  const {colors} = useTheme();

  function handleDeleteButton() {
    setDisabled(true);
    deleteProduct({
      mealId,
      objectId: product.objectId,
      mealType: mealType,
      productType,
      data: {
        nutrients,
        minerals,
        vitamins,
      },
    }).then(_ => navigation.pop(3));
  }

  function handleUpdateButton() {
    setDisabled(true);
    updateProduct({
      data: {
        nutrients,
        minerals,
        vitamins,
        weight: +value,
      },
      mealId,
      mealType,
      objectId: product.objectId,
      productType,
    })
      .then(_ => navigation.pop(3))
      .catch(e => console.log(e));
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
          action={'update'}
          onPressDelete={handleDeleteButton}
          onPressUpdate={handleUpdateButton}
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
