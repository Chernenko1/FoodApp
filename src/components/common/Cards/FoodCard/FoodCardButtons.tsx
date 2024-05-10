import {Button} from 'components/common/Buttons/Button';
import {StyleSheet, View} from 'react-native';
import {addFoodToMeal} from 'services/apis/mealAPI';
import {useAppSelector} from 'store/hooks';

import {COLORS} from 'themes/COLORS';

interface IFoodCardButtons {
  action: 'add' | 'update';
  mealType: MealType;
  id: string;
  weight: number;
  micmacNutrients: MicMacNutrients;
}

export const FoodCardButtons = ({
  action,
  mealType,
  id,
  weight,
  micmacNutrients,
}: IFoodCardButtons) => {
  const date = useAppSelector(state => state.app.date);
  const {_id} = useAppSelector(state => state.user.user);

  function addFood() {
    addFoodToMeal({
      date,
      type: mealType,
      userId: _id,
      data: {id, weight, nutrients: micmacNutrients},
    })
      .then(_ => console.log('up'))
      .catch(e => console.log(e));
  }

  return (
    <View style={styles.buttonView}>
      {action === 'add' ? (
        <View style={styles.singleButtonView}>
          <Button
            title="Добавить"
            color={COLORS.orange}
            textColor={COLORS.white}
            onPress={addFood}
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
