import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Button} from 'components/common/Buttons/Button';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {addFoodToMeal} from 'services/apis/mealAPI';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {setMeals} from 'store/slices/MealSlice';

import {COLORS} from 'themes/COLORS';

interface IFoodCardButtons {
  action: 'add' | 'update';
  mealType: MealType;
  id: string;
  productType: 'recipe' | 'food';
  weight: number;
  nutrients: Nutrients;
}

type Navigation = NativeStackNavigationProp<HomeParamList, 'FoodCard'>;

export const FoodCardButtons = ({
  action,
  productType,
  mealType,
  id,
  weight,
  nutrients,
}: IFoodCardButtons) => {
  const [disabled, setDisabled] = useState(false);

  const date = useAppSelector(state => state.app.date);
  const {_id} = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<Navigation>();

  function addProduct() {
    setDisabled(!disabled);
    addFoodToMeal({
      date,
      mealType,
      productType,
      userId: _id,
      data: {id, weight, nutrients},
    })
      .then(data => {
        navigation.navigate('StackHome');
        dispatch(setMeals(data));
      })
      .catch(e => console.log(e));
  }

  return (
    <View style={styles.buttonView}>
      {action === 'add' ? (
        <View style={styles.singleButtonView}>
          <Button
            disabled={disabled}
            title="Добавить"
            color={COLORS.orange}
            textColor={COLORS.white}
            onPress={addProduct}
          />
        </View>
      ) : (
        <>
          <Button
            style={styles.button}
            title="Удалить"
            color={COLORS.red}
            textColor={COLORS.white}
            // onPress={deleteProduct}
          />
          <Button
            style={styles.button}
            title="Сохранить"
            color={COLORS.orange}
            textColor={COLORS.white}
            // onPress={updateProduct}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  singleButtonView: {
    flex: 1,
  },
  button: {
    width: '40%',
  },
});
