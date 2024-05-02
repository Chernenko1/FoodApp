import {StyleSheet, View} from 'react-native';
import {AppText} from '../../components/AppText';
import * as Yup from 'yup';
import {InputText} from '../../components/TextInput';
import {useFormik} from 'formik';
import {useTheme} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {ProductCreateContext} from './ProductCreateContext';

interface IBasicInfo {
  setBasicInfo: (name: string) => void;
}

export const BasicInfo = ({setBasicInfo}: IBasicInfo) => {
  const context = useContext(ProductCreateContext);

  const BasicInfoSchema = Yup.object().shape({
    name: Yup.string().min(1).max(100).required('Имя не может быть пустым'),
    quantity: Yup.number().required(),
  });

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: BasicInfoSchema,
      initialValues: {name: context.name, quantity: 100},
      onSubmit: values => setBasicInfo(values.name),
    });

  const {colors} = useTheme();

  useEffect(() => {
    handleSubmit();
  }, [values]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainerColumn}>
          <AppText style={styles.inputTitle}>
            Введите название продукта:
          </AppText>
          <InputText
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            error={errors.name}
            touched={touched.name}
            multiline={true}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainerRow}>
          <AppText style={styles.inputTitle}>
            Укажите единицу измерения:
          </AppText>
          <AppText>граммы</AppText>
        </View>
        <View style={styles.inputContainerRow}>
          <AppText style={styles.inputTitle}>Введите вес продукта: </AppText>
          <AppText>100</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  input: {
    borderRadius: 5,
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inputsContainer: {
    marginTop: 10,
    rowGap: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontFamily: 'Rubik-Regular',
  },
  inputContainerColumn: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  },
  inputContainerRow: {
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
