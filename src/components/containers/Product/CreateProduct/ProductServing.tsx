import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {ProductCreateContext} from './ProductCreateContext';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {InputField} from './InputField';
import {ShakeCard} from 'components/common/Cards/ShakeCard';
import {AppText} from 'components/common/AppText';

interface IProductServing {
  setProductServing: (nutrients: Nutrients) => void;
  setIsValid: (isValid: boolean) => void;
}

export const ProductServing = ({
  setProductServing,
  setIsValid,
}: IProductServing) => {
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

  const {handleChange, handleSubmit, values, errors, isValid} = useFormik({
    validationSchema: NutrientsSchema,
    initialValues: nutrients,
    onSubmit: values => setProductServing(values),
  });

  useEffect(() => {
    handleSubmit();
  }, [values]);

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid]);

  return (
    <View style={styles.container}>
      <ShakeCard
        shake={!!errors.calories}
        style={!!errors.calories && styles.errorContainer}>
        <InputField title="Введите количество калорий: " ms="ккал">
          <AppTextInput
            value={values.calories}
            onChangeText={handleChange('protein')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.calories && (
        <AppText style={styles.errorText}>{errors.calories}</AppText>
      )}
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
