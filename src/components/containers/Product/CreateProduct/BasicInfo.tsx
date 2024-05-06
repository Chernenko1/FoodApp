import {useTheme} from '@react-navigation/native';
import {Field, Formik, useFormik} from 'formik';
import React, {useContext, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {AppText} from '../../../common/AppText';
import {ProductCreateContext} from './ProductCreateContext';
import {AppTextInput} from 'components/common/Inputs/AppTextInput';

interface IBasicInfo {
  setBasicInfo: (name: string) => void;
  setIsValid: (isValid: boolean) => void;
}

export const BasicInfo = ({setBasicInfo, setIsValid}: IBasicInfo) => {
  const context = useContext(ProductCreateContext);

  const BasicInfoSchema = Yup.object().shape({
    name: Yup.string().min(1).max(100).required('Поле не может быть пустым'),
    quantity: Yup.number().required(),
  });

  const {handleChange, handleSubmit, values, errors, isValid} = useFormik({
    validationSchema: BasicInfoSchema,
    initialValues: {name: context.name, quantity: 100},
    onSubmit: values => {
      setBasicInfo(values.name);
    },
  });

  const {colors} = useTheme();

  useEffect(() => {
    handleSubmit();
  }, [values]);

  useEffect(() => {
    setIsValid(isValid);
  }, [isValid]);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainerColumn}>
          <AppText style={styles.inputTitle}>
            Введите название продукта:
          </AppText>
          <AppTextInput
            value={values.name}
            onChangeText={handleChange('name')}
            error={!!errors.name}
            errorMessage={errors.name as string}
          />
        </View>

        <View style={styles.inputContainerRow}>
          <AppText style={styles.inputTitle}>
            Укажите единицу измерения:
          </AppText>
          <AppText>граммы</AppText>
        </View>

        <View style={styles.inputContainerRow}>
          <AppText style={styles.inputTitle}>Введите вес продукта:</AppText>
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
