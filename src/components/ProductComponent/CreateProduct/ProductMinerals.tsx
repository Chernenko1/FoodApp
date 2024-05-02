import {useTheme} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {ProductCreateContext} from './ProductCreateContext';

import {AppText} from '../../components/AppText';
import {InputText} from '../../components/TextInput';

interface IProductMinerals {
  setProductMinerals: (minerals: Minerals) => void;
}

export const ProductMinerals = ({setProductMinerals}: IProductMinerals) => {
  const {minerals, quantity} = useContext(ProductCreateContext);

  const Minerals = Yup.object().shape({
    Mn: Yup.number().min(0).max(quantity).required('Минерал'),
    NaCL: Yup.number().min(0).max(quantity).required('Минерал'),
    Fe: Yup.number().min(0).max(quantity).required('Минерал'),
    Mg: Yup.number().min(0).max(quantity).required('Минерал'),
    P: Yup.number().min(0).max(quantity).required('Минерал'),
    Ca: Yup.number().min(0).max(quantity).required('Минерал'),
    Na: Yup.number().min(0).max(quantity).required('Минерал'),
    Zn: Yup.number().min(0).max(quantity).required('Минерал'),
    Cu: Yup.number().min(0).max(quantity).required('Минерал'),
    I: Yup.number().min(0).max(quantity).required('Минерал'),
    Se: Yup.number().min(0).max(quantity).required('Минерал'),
    Cr: Yup.number().min(0).max(quantity).required('Минерал'),
    K: Yup.number().min(0).max(quantity).required('Минерал'),
    Mo: Yup.number().min(0).max(quantity).required('Минерал'),
  });

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: Minerals,
      initialValues: minerals,
      onSubmit: (values: Minerals) => setProductMinerals(values),
    });

  useEffect(() => {
    handleSubmit();
  }, [values]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Mn: </AppText>
        <InputText
          value={values.Mn}
          onChangeText={handleChange('Mn')}
          keyboardType="numeric"
          touched={touched.Mn}
          onBlur={handleBlur('Mn')}
          error={errors.Mn}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Fe: </AppText>
        <InputText
          value={values.Fe}
          onChangeText={handleChange('Fe')}
          keyboardType="numeric"
          touched={touched.Fe}
          onBlur={handleBlur('Fe')}
          error={errors.Fe}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>"NaCL(соль)": </AppText>
        <InputText
          value={values.NaCL}
          onChangeText={handleChange('NaCL')}
          keyboardType="numeric"
          touched={touched.NaCL}
          onBlur={handleBlur('')}
          error={errors.NaCL}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Mg: </AppText>
        <InputText
          value={values.Mg}
          onChangeText={handleChange('Mg')}
          keyboardType="numeric"
          touched={touched.Mg}
          onBlur={handleBlur('Mg')}
          error={errors.Mg}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>P: </AppText>
        <InputText
          value={values.P}
          onChangeText={handleChange('P')}
          keyboardType="numeric"
          touched={touched.P}
          onBlur={handleBlur('P')}
          error={errors.P}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Ca: </AppText>
        <InputText
          value={values.Ca}
          onChangeText={handleChange('Ca')}
          keyboardType="numeric"
          touched={touched.Ca}
          onBlur={handleBlur('Ca')}
          error={errors.Ca}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Na: </AppText>
        <InputText
          value={values.Na}
          onChangeText={handleChange('Na')}
          keyboardType="numeric"
          touched={touched.Na}
          onBlur={handleBlur('Na')}
          error={errors.Na}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Zn: </AppText>
        <InputText
          value={values.Zn}
          onChangeText={handleChange('Zn')}
          keyboardType="numeric"
          touched={touched.Zn}
          onBlur={handleBlur('Zn')}
          error={errors.Zn}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Cu: </AppText>
        <InputText
          value={values.Cu}
          onChangeText={handleChange('Cu')}
          keyboardType="numeric"
          touched={touched.Cu}
          onBlur={handleBlur('Cu')}
          error={errors.Cu}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>I: </AppText>
        <InputText
          value={values.I}
          onChangeText={handleChange('I')}
          keyboardType="numeric"
          touched={touched.I}
          onBlur={handleBlur('I')}
          error={errors.I}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Se: </AppText>
        <InputText
          value={values.Se}
          onChangeText={handleChange('Se')}
          keyboardType="numeric"
          touched={touched.Se}
          onBlur={handleBlur('Se')}
          error={errors.Se}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Cr: </AppText>
        <InputText
          value={values.Cr}
          onChangeText={handleChange('Cr')}
          keyboardType="numeric"
          touched={touched.Cr}
          onBlur={handleBlur('Cr')}
          error={errors.Cr}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>K: </AppText>
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
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Mo: </AppText>
        <InputText
          value={values.Mo}
          onChangeText={handleChange('Mo')}
          keyboardType="numeric"
          touched={touched.Mo}
          onBlur={handleBlur('Mo')}
          error={errors.Mo}
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
