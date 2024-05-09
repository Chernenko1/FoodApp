import {ScrollView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppText} from '../../AppText';
import {KBFUInfo} from '../../KBFUInfo';
import {AppTextInput} from '../../Inputs/AppTextInput';
import {useTheme} from '@react-navigation/native';
import {useState} from 'react';
import {calculateNutritionalValue} from 'utils/calculateNutritionalValue';
import {Button} from '../../Buttons/Button';
import {FoodCardButtons} from './FoodCardButtons';

type Navigation = NativeStackScreenProps<RecipesParamList, 'FoodCard'>;

export const FoodCard = ({navigation, route}: Navigation) => {
  const {nutrients, weight, _id, name} = route.params;
  const [value, setValue] = useState(String(weight));

  const {colors} = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppText fontWeight="bold" size={24}>
        {name}
      </AppText>

      <View style={[styles.inputContainer, {backgroundColor: colors.card}]}>
        <View style={styles.inputView}>
          <AppText>Вес: </AppText>
          <AppTextInput value={value} onChangeText={text => setValue(text)} />
        </View>
        <View style={styles.inputView}>
          <AppText>Единица измерений: </AppText>
          <AppText>граммы</AppText>
        </View>
      </View>

      <FoodCardButtons
        action="add"
        mealType="breakfast"
        id={_id}
        weight={weight}
      />

      <KBFUInfo
        calories={nutrients.calories}
        protein={calculateNutritionalValue(weight, value, nutrients.protein)}
        fat={calculateNutritionalValue(weight, value, nutrients.fat)}
        carbohydrates={calculateNutritionalValue(
          weight,
          value,
          nutrients.carbohydrates,
        )}
        dietaryFiber={calculateNutritionalValue(
          weight,
          value,
          nutrients.dietaryFiber,
        )}
        water={calculateNutritionalValue(weight, value, nutrients.water)}
      />
    </ScrollView>
  );
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
