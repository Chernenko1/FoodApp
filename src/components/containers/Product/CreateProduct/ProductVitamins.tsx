import {ScrollView, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';

import {ProductCreateContext} from './ProductCreateContext';
import {AppText} from '../../../common/AppText';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {InputField} from './InputField';
import {ShakeCard} from 'components/common/Cards/ShakeCard';

interface IProductVitamins {
  setProductVitamins: (vitamins: Vitamins) => void;
  setIsValid: (isValid: boolean) => void;
}

export const ProductVitamins = ({
  setProductVitamins,
  setIsValid,
}: IProductVitamins) => {
  const {weight, vitamins} = useContext(ProductCreateContext);

  const VitaminsSchema = Yup.object().shape({
    B1: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B3: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B2: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B5: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B6: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B7: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B9: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    B12: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    C: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    A: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    D: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    E: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    K: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
  });

  const {handleChange, handleSubmit, values, errors, isValid} = useFormik({
    validationSchema: VitaminsSchema,
    initialValues: vitamins,
    onSubmit: values => setProductVitamins(values),
  });

  useEffect(() => {
    handleSubmit();
  }, [values]);

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ShakeCard
        shake={!!errors.B1}
        style={!!errors.B1 && styles.errorContainer}>
        <InputField title="Витамин B1:">
          <AppTextInput
            value={values.B1}
            onChangeText={handleChange('B1')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B1 && <AppText style={styles.errorText}>{errors.B1}</AppText>}

      <ShakeCard
        shake={!!errors.B2}
        style={!!errors.B2 && styles.errorContainer}>
        <InputField title="Витамин B2:">
          <AppTextInput
            value={values.B2}
            onChangeText={handleChange('B2')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B2 && <AppText style={styles.errorText}>{errors.B2}</AppText>}

      <ShakeCard
        shake={!!errors.B3}
        style={!!errors.B3 && styles.errorContainer}>
        <InputField title="Витамин B3:">
          <AppTextInput
            value={values.B3}
            onChangeText={handleChange('B3')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B3 && <AppText style={styles.errorText}>{errors.B3}</AppText>}

      <ShakeCard
        shake={!!errors.B5}
        style={!!errors.B5 && styles.errorContainer}>
        <InputField title="Витамин B5:">
          <AppTextInput
            value={values.B5}
            onChangeText={handleChange('B5')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B5 && <AppText style={styles.errorText}>{errors.B5}</AppText>}

      <ShakeCard
        shake={!!errors.B6}
        style={!!errors.B6 && styles.errorContainer}>
        <InputField title="Витамин B6:">
          <AppTextInput
            value={values.B6}
            onChangeText={handleChange('B6')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B6 && <AppText style={styles.errorText}>{errors.B6}</AppText>}

      <ShakeCard
        shake={!!errors.B7}
        style={!!errors.B7 && styles.errorContainer}>
        <InputField title="Витамин B7:">
          <AppTextInput
            value={values.B7}
            onChangeText={handleChange('B7')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B7 && <AppText style={styles.errorText}>{errors.B7}</AppText>}

      <ShakeCard
        shake={!!errors.B9}
        style={!!errors.B9 && styles.errorContainer}>
        <InputField title="Витамин B9:">
          <AppTextInput
            value={values.B9}
            onChangeText={handleChange('B9')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B9 && <AppText style={styles.errorText}>{errors.B9}</AppText>}

      <ShakeCard
        shake={!!errors.B12}
        style={!!errors.B12 && styles.errorContainer}>
        <InputField title="Витамин B12:">
          <AppTextInput
            value={values.B12}
            onChangeText={handleChange('B12')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.B12 && <AppText style={styles.errorText}>{errors.B12}</AppText>}

      <ShakeCard shake={!!errors.C} style={!!errors.C && styles.errorContainer}>
        <InputField title="Витамин C:">
          <AppTextInput
            value={values.C}
            onChangeText={handleChange('C')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.C && <AppText style={styles.errorText}>{errors.C}</AppText>}

      <ShakeCard shake={!!errors.A} style={!!errors.A && styles.errorContainer}>
        <InputField title="Витамин A:">
          <AppTextInput
            value={values.A}
            onChangeText={handleChange('A')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.A && <AppText style={styles.errorText}>{errors.A}</AppText>}

      <ShakeCard shake={!!errors.D} style={!!errors.D && styles.errorContainer}>
        <InputField title="Витамин D:">
          <AppTextInput
            value={values.D}
            onChangeText={handleChange('D')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.D && <AppText style={styles.errorText}>{errors.D}</AppText>}

      <ShakeCard shake={!!errors.E} style={!!errors.E && styles.errorContainer}>
        <InputField title="Витамин E:">
          <AppTextInput
            value={values.E}
            onChangeText={handleChange('E')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.E && <AppText style={styles.errorText}>{errors.E}</AppText>}

      <ShakeCard shake={!!errors.K} style={!!errors.K && styles.errorContainer}>
        <InputField title="Витамин K:">
          <AppTextInput
            value={values.K}
            onChangeText={handleChange('K')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.K && <AppText style={styles.errorText}>{errors.K}</AppText>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 75,
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
