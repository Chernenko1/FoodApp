import {useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';

import Icon from 'react-native-vector-icons/Ionicons';
import {getProduct} from '../../../services/apis/productAPI';
import {mealsAPI} from '../../../store/services/mealsService';
import {COLORS} from '../../../themes/COLORS';
import {Button} from '../../common/Buttons/Button';
import {LineInfoCard} from '../../common/Cards/LineInfoCard';
import {InputText} from '../../common/Inputs/TextInput';

type Navigation = NativeStackScreenProps<HomeParamList, 'ProductInfo'>;

export const ProductInfo = ({navigation, route}: Navigation) => {
  const {_id: userId} = useAppSelector(state => state.user.user);
  const {_id: mealId} = useAppSelector(state => state.meals.meals);

  const {productData, mealType, func} = route.params;

  const [value, setValue] = useState(productData.quantity || '100');
  const [nutrients, setNutrients] = useState(productData.nutrients);

  const {date} = useAppSelector(state => state.app);

  const [useDeleteProductInMeal, {error, isLoading}] =
    mealsAPI.useDeleteProductInMealMutation();
  const [useUpdateProductInMeal, {}] =
    mealsAPI.useUpdateProductInMealMutation();
  const [useAddProductToMeal, {}] = mealsAPI.useAddProductToMealMutation();

  const {colors} = useTheme();

  const addProduct = () => {
    useAddProductToMeal({
      userId,
      data: {productId: productData._id, quantity: value},
      date,
      type: mealType,
    })
      .then(_ => {
        navigation.pop(2);
      })
      .catch(e => console.log(e));
  };

  const updateProduct = () => {
    useUpdateProductInMeal({
      mealId,
      _id: productData.cardId,
      type: mealType,
      quantity: value,
    })
      .then(_ => navigation.goBack())
      .catch(e => console.log(e));
  };

  const deleteProduct = () => {
    useDeleteProductInMeal({mealId, id: productData.cardId, type: mealType})
      .then(_ => navigation.goBack())
      .catch(e => console.log(e));
  };

  useEffect(() => {
    navigation.setOptions({headerTitle: productData.name});
  }, []);

  useEffect(() => {
    getProduct(productData._id, value)
      .then(data => setNutrients(data))
      .catch(e => console.log(e));
  }, [value]);

  return (
    <View style={[styles.mainView, {backgroundColor: colors.background}]}>
      <View style={[styles.inputMainView, {backgroundColor: colors.card}]}>
        <View style={styles.inputView}>
          <Icon name="scale-outline" size={35} color={COLORS.orange} />
          <InputText
            value={String(value)}
            keyboardType="numeric"
            onChangeText={(text: string) => setValue(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Icon name="list-outline" size={35} color={COLORS.orange} />
          <InputText value={'г'} editable={false} />
        </View>

        {func == 'add' ? (
          <View style={{}}>
            <Button
              title="Добавить"
              color={COLORS.orange}
              textColor={COLORS.white}
              onPress={addProduct}
            />
          </View>
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.button}
              title="Удалить"
              color={COLORS.red}
              textColor={COLORS.white}
              onPress={deleteProduct}
            />
            <Button
              style={styles.button}
              title="Сохранить"
              color={COLORS.orange}
              textColor={COLORS.white}
              onPress={updateProduct}
            />
          </View>
        )}
      </View>

      <View style={[styles.infoView, {backgroundColor: colors.card}]}>
        <LineInfoCard
          nameText="Калории"
          infoText={nutrients.calories + 'ккал'}
        />
        <LineInfoCard nameText="Белки" infoText={nutrients.protein + 'г'} />
        <LineInfoCard nameText="Жиры" infoText={nutrients.fat + 'г'} />
        <LineInfoCard
          nameText="Углеводы"
          infoText={nutrients.carbohydrates + 'г'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingHorizontal: 10,
  },
  inputMainView: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    rowGap: 20,
    borderRadius: 10,
    elevation: 2,
  },
  inputView: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRadius: 5,
    columnGap: 10,
  },
  button: {
    width: '40%',
  },
  infoView: {
    paddingVertical: 10,
    borderRadius: 10,
    rowGap: 10,
    elevation: 2,
  },
  infoText: {
    fontSize: 20,
    color: COLORS.orange,
  },
});
