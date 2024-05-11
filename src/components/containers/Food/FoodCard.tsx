import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {calculateNutritionalValue} from 'utils/calculateNutritionalValue';
import {AppText} from 'components/common/AppText';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {KBFUCard} from 'components/common/Cards/KBFUCard';
import {FoodCardButtons} from './FoodCardButtons';

type Navigation = NativeStackScreenProps<RecipesParamList, 'FoodCard'>;

export const FoodCard = ({navigation, route}: Navigation) => {
  const {fetchFunc, id, mealType, action} = route.params;
  const [product, setProduct] = useState<Product>();
  const [value, setValue] = useState('');
  const {colors} = useTheme();

  useEffect(() => {
    fetchFunc(id).then(data => {
      setProduct(data);
      setValue(String(data.weight));
    });
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
          mealType={'lunch'}
          id={id}
          productType="recipe"
          weight={+product.weight}
          nutrients={calculateNutritionalValue(
            product.nutrients,
            product.weight,
            value,
          )}
        />
        <KBFUCard
          nutrients={calculateNutritionalValue(
            product.nutrients,
            product.weight,
            value,
          )}
        />
      </ScrollView>
    );
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
