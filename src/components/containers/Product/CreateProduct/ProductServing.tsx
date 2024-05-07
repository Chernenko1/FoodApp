import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {ProductCreateContext} from './ProductCreateContext';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {InputField} from './InputField';
import {ShakeCard} from 'components/common/Cards/ShakeCard';
import {AppText} from 'components/common/AppText';

type Nutrients = {
  calories: string | number;
  protein: string | number;
  fat: string | number;
  carbohydrates: string | number;
  water: string | number;
  dietaryFiber: string | number;
};

interface IProductServing {
  setProductServing: ({
    calories,
    carbohydrates,
    fat,
    protein,
    water,
    dietaryFiber,
  }: Nutrients) => void;
}

export const ProductServing = ({setProductServing}: IProductServing) => {
  const {quantity, nutrients} = useContext(ProductCreateContext);

  const NutrientsSchema = Yup.object().shape({
    protein: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(quantity, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    carbohydrates: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(quantity, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    fat: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(quantity, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    water: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(quantity, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    dietaryFiber: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(quantity, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
  });

  const {handleChange, handleSubmit, values, errors} = useFormik({
    validationSchema: NutrientsSchema,
    initialValues: {
      protein: String(nutrients.protein),
      fat: String(nutrients.fat),
      carbohydrates: String(nutrients.carbohydrates),
      water: String(nutrients.water),
      dietaryFiber: String(nutrients.dietaryFiber),
    },
    onSubmit: values => setProductServing({...values, calories: '100'}),
  });

  useEffect(() => {
    handleSubmit();
  }, [values]);

  return (
    <View style={styles.container}>
      <ShakeCard
        shake={!!errors.protein}
        style={!!errors.protein && styles.errorContainer}>
        <InputField title="Введите количество белков: ">
          <AppTextInput
            value={values.protein}
            onChangeText={handleChange('protein')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.protein && (
        <AppText style={styles.errorText}>{errors.protein}</AppText>
      )}
      <ShakeCard
        shake={!!errors.fat}
        style={!!errors.fat && styles.errorContainer}>
        <InputField title="Введите количество жиров: ">
          <AppTextInput
            value={values.fat}
            onChangeText={handleChange('fat')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.fat && <AppText style={styles.errorText}>{errors.fat}</AppText>}
      <ShakeCard
        shake={!!errors.carbohydrates}
        style={!!errors.carbohydrates && styles.errorContainer}>
        <InputField title="Введите количество углеводов:">
          <AppTextInput
            value={values.carbohydrates}
            onChangeText={handleChange('carbohydrates')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.carbohydrates && (
        <AppText style={styles.errorText}>{errors.carbohydrates}</AppText>
      )}
      <ShakeCard
        shake={!!errors.water}
        style={!!errors.water && styles.errorContainer}>
        <InputField title="Введите количество воды:">
          <AppTextInput
            value={values.water}
            onChangeText={handleChange('water')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.water && (
        <AppText style={styles.errorText}>{errors.water}</AppText>
      )}
      <ShakeCard
        shake={!!errors.dietaryFiber}
        style={!!errors.dietaryFiber && styles.errorContainer}>
        <InputField title="Введите количество клетчатки:">
          <AppTextInput
            value={values.dietaryFiber}
            onChangeText={handleChange('dietaryFiber')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.dietaryFiber && (
        <AppText style={styles.errorText}>{errors.dietaryFiber}</AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
    rowGap: 10,
  },
  errorContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontFamily: 'Rubik-Regular',
    fontSize: 20,
  },
});
