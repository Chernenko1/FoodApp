import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {AppText} from 'components/common/AppText';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {getProduct} from 'services/apis/productAPI';
import {calculateNutritionalValue} from 'utils/calculateNutritionalValue';
import {FoodCardButtons} from './FoodCardButtons';
import {SafeAreaView} from 'react-native-safe-area-context';

type Navigation = NativeStackScreenProps<RecipesParamList, 'ProductAdd'>;

export const FoodForRecipeCard = ({navigation, route}: Navigation) => {
  const {id} = route.params;

  const [product, setProduct] = useState<Product>();
  const [value, setValue] = useState('');

  const {colors} = useTheme();

  function handleButtonAdd() {
    navigation.navigate('RecipeCreate', {
      products: {
        id: product?._id as string,
        name: product?.name as string,
        weight: +value,
      },
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
    getProduct(id).then((data: Product) => {
      setProduct(data);
      setValue(String(data.weight));
    });
  }, []);

  if (product) {
    return (
      <SafeAreaView>
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
            disabled={false}
          />
          <KBFUCard nutrients={nutrients} />
        </ScrollView>
      </SafeAreaView>
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
