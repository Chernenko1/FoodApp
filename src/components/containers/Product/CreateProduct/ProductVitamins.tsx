import {ScrollView, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';

import {ProductCreateContext} from './ProductCreateContext';
import {AppText} from '../../../common/AppText';
import {InputText} from '../../../common/Inputs/TextInput';

interface IProductVitamins {
  setProductVitamins: (vitamins: Vitamins) => void;
}

export const ProductVitamins = ({setProductVitamins}: IProductVitamins) => {
  const {quantity, vitamins} = useContext(ProductCreateContext);

  const VitaminsSchema = Yup.object().shape({
    B1: Yup.number().min(0).max(quantity).required('Витамин'),
    B3: Yup.number().min(0).max(quantity).required('Витамин'),
    B2: Yup.number().min(0).max(quantity).required('Витамин'),
    B5: Yup.number().min(0).max(quantity).required('Витамин'),
    B6: Yup.number().min(0).max(quantity).required('Витамин'),
    B7: Yup.number().min(0).max(quantity).required('Витамин'),
    B9: Yup.number().min(0).max(quantity).required('Витамин'),
    B12: Yup.number().min(0).max(quantity).required('Витамин'),
    C: Yup.number().min(0).max(quantity).required('Витамин'),
    A: Yup.number().min(0).max(quantity).required('Витамин'),
    D: Yup.number().min(0).max(quantity).required('Витамин'),
    E: Yup.number().min(0).max(quantity).required('Витамин'),
    K: Yup.number().min(0).max(quantity).required('Витамин'),
  });

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: VitaminsSchema,
      initialValues: {
        ...vitamins,
      },
      onSubmit: (values: Vitamins) => setProductVitamins(values),
    });

  useEffect(() => {
    handleSubmit();
  }, [values]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B1: </AppText>
        <InputText
          value={values.B1}
          onChangeText={handleChange('B1')}
          keyboardType="numeric"
          touched={touched.B1}
          onBlur={handleBlur('B1')}
          error={errors.B1}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B2: </AppText>
        <InputText
          value={values.B2}
          onChangeText={handleChange('B2')}
          keyboardType="numeric"
          touched={touched.B2}
          onBlur={handleBlur('B2')}
          error={errors.B2}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B3: </AppText>
        <InputText
          value={values.B3}
          onChangeText={handleChange('B3')}
          keyboardType="numeric"
          touched={touched.B3}
          onBlur={handleBlur('B3')}
          error={errors.B3}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B5: </AppText>
        <InputText
          value={values.B5}
          onChangeText={handleChange('B5')}
          keyboardType="numeric"
          touched={touched.B5}
          onBlur={handleBlur('B5')}
          error={errors.B5}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B6: </AppText>
        <InputText
          value={values.B6}
          onChangeText={handleChange('B6')}
          keyboardType="numeric"
          touched={touched.B6}
          onBlur={handleBlur('B6')}
          error={errors.B6}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B7: </AppText>
        <InputText
          value={values.B7}
          onChangeText={handleChange('B7')}
          keyboardType="numeric"
          touched={touched.B7}
          onBlur={handleBlur('B7')}
          error={errors.B7}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B9: </AppText>
        <InputText
          value={values.B9}
          onChangeText={handleChange('B9')}
          keyboardType="numeric"
          touched={touched.B9}
          onBlur={handleBlur('B9')}
          error={errors.B9}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B9: </AppText>
        <InputText
          value={values.B9}
          onChangeText={handleChange('B9')}
          keyboardType="numeric"
          touched={touched.B9}
          onBlur={handleBlur('B9')}
          error={errors.B9}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин B12: </AppText>
        <InputText
          value={values.B12}
          onChangeText={handleChange('B12')}
          keyboardType="numeric"
          touched={touched.B12}
          onBlur={handleBlur('B12')}
          error={errors.B12}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин C: </AppText>
        <InputText
          value={values.C}
          onChangeText={handleChange('C')}
          keyboardType="numeric"
          touched={touched.C}
          onBlur={handleBlur('C')}
          error={errors.C}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин A: </AppText>
        <InputText
          value={values.A}
          onChangeText={handleChange('A')}
          keyboardType="numeric"
          touched={touched.A}
          onBlur={handleBlur('A')}
          error={errors.A}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин D: </AppText>
        <InputText
          value={values.D}
          onChangeText={handleChange('D')}
          keyboardType="numeric"
          touched={touched.D}
          onBlur={handleBlur('D')}
          error={errors.D}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин E: </AppText>
        <InputText
          value={values.E}
          onChangeText={handleChange('E')}
          keyboardType="numeric"
          touched={touched.E}
          onBlur={handleBlur('E')}
          error={errors.E}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Витамин K: </AppText>
        <InputText
          value={values.K}
          onChangeText={handleChange('K')}
          keyboardType="numeric"
          touched={touched.K}
          onBlur={handleBlur('K')}
          error={errors.K}
          style={styles.input}
        />
      </View>
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
  input: {
    borderBottomWidth: 1,
    width: 50,
    textAlign: 'center',
  },
  inputTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
    flexWrap: 'wrap',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
});
