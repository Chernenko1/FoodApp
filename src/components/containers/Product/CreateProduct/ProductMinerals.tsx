import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {ProductCreateContext} from './ProductCreateContext';
import {AppText} from '../../../common/AppText';
import {useTheme} from '@react-navigation/native';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';
import {ShakeCard} from 'components/common/Cards/ShakeCard';
import {InputField} from './InputField';

interface IProductMinerals {
  setProductMinerals: (minerals: Minerals) => void;
  setIsValid: (isValid: boolean) => void;
}

export const ProductMinerals = ({
  setProductMinerals,
  setIsValid,
}: IProductMinerals) => {
  const {minerals, weight} = useContext(ProductCreateContext);

  const Minerals = Yup.object().shape({
    Mn: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    NaCL: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Fe: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Mg: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    P: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Ca: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Na: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Zn: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Cu: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    I: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Se: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Cr: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    K: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
    Mo: Yup.number()
      .min(0, 'Не может быть меньше нуля')
      .max(weight, 'Не может быть больше веса продукта')
      .required('Не может быть пустым'),
  });

  const {handleChange, handleSubmit, values, errors, isValid} = useFormik({
    validationSchema: Minerals,
    initialValues: minerals,
    onSubmit: values => setProductMinerals(values),
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
        shake={!!errors.Mn}
        style={!!errors.Mn && styles.errorContainer}>
        <InputField title="Витамин Mn:">
          <AppTextInput
            value={values.Mn}
            onChangeText={handleChange('Mn')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Mn && <AppText style={styles.errorText}>{errors.Mn}</AppText>}

      <ShakeCard
        shake={!!errors.Fe}
        style={!!errors.Fe && styles.errorContainer}>
        <InputField title="Витамин Fe:">
          <AppTextInput
            value={values.Fe}
            onChangeText={handleChange('Fe')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Fe && <AppText style={styles.errorText}>{errors.Fe}</AppText>}

      <ShakeCard
        shake={!!errors.NaCL}
        style={!!errors.NaCL && styles.errorContainer}>
        <InputField title="Витамин NaCl:">
          <AppTextInput
            value={values.NaCL}
            onChangeText={handleChange('NaCL')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.NaCL && (
        <AppText style={styles.errorText}>{errors.NaCL}</AppText>
      )}

      <ShakeCard
        shake={!!errors.Mg}
        style={!!errors.Mg && styles.errorContainer}>
        <InputField title="Витамин Mg:">
          <AppTextInput
            value={values.Mg}
            onChangeText={handleChange('Mg')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Mg && <AppText style={styles.errorText}>{errors.Mg}</AppText>}

      <ShakeCard shake={!!errors.P} style={!!errors.P && styles.errorContainer}>
        <InputField title="Витамин P:">
          <AppTextInput
            value={values.P}
            onChangeText={handleChange('P')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.P && <AppText style={styles.errorText}>{errors.P}</AppText>}

      <ShakeCard
        shake={!!errors.Ca}
        style={!!errors.Ca && styles.errorContainer}>
        <InputField title="Витамин Ca:">
          <AppTextInput
            value={values.Ca}
            onChangeText={handleChange('Ca')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Ca && <AppText style={styles.errorText}>{errors.Ca}</AppText>}

      <ShakeCard
        shake={!!errors.Na}
        style={!!errors.Na && styles.errorContainer}>
        <InputField title="Витамин Na:">
          <AppTextInput
            value={values.Na}
            onChangeText={handleChange('Na')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Na && <AppText style={styles.errorText}>{errors.Na}</AppText>}

      <ShakeCard
        shake={!!errors.Zn}
        style={!!errors.Zn && styles.errorContainer}>
        <InputField title="Витамин Zn:">
          <AppTextInput
            value={values.Zn}
            onChangeText={handleChange('Zn')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Zn && <AppText style={styles.errorText}>{errors.Zn}</AppText>}

      <ShakeCard
        shake={!!errors.Cu}
        style={!!errors.Cu && styles.errorContainer}>
        <InputField title="Витамин Cu:">
          <AppTextInput
            value={values.Cu}
            onChangeText={handleChange('Cu')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Cu && <AppText style={styles.errorText}>{errors.Cu}</AppText>}

      <ShakeCard shake={!!errors.I} style={!!errors.I && styles.errorContainer}>
        <InputField title="Витамин I:">
          <AppTextInput
            value={values.I}
            onChangeText={handleChange('I')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.I && <AppText style={styles.errorText}>{errors.I}</AppText>}

      <ShakeCard
        shake={!!errors.Se}
        style={!!errors.Se && styles.errorContainer}>
        <InputField title="Витамин Se:">
          <AppTextInput
            value={values.Se}
            onChangeText={handleChange('Se')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Se && <AppText style={styles.errorText}>{errors.Se}</AppText>}

      <ShakeCard
        shake={!!errors.Cr}
        style={!!errors.Cr && styles.errorContainer}>
        <InputField title="Витамин Cr:">
          <AppTextInput
            value={values.Cr}
            onChangeText={handleChange('Cr')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Cr && <AppText style={styles.errorText}>{errors.Cr}</AppText>}

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

      <ShakeCard
        shake={!!errors.Mo}
        style={!!errors.Mo && styles.errorContainer}>
        <InputField title="Витамин Mn:">
          <AppTextInput
            value={values.Mo}
            onChangeText={handleChange('Mo')}
            keyboardType="numeric"
          />
        </InputField>
      </ShakeCard>
      {!!errors.Mo && <AppText style={styles.errorText}>{errors.Mo}</AppText>}
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
