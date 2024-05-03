import {useFormik} from 'formik';
import {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import {ProductCreateContext} from './ProductCreateContext';
import {AppText} from '../../../common/AppText';
import {InputText} from '../../../common/Inputs/TextInput';

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
    protein: Yup.number().min(0).max(quantity).required('Протеин'),
    carbohydrates: Yup.number().min(0).max(quantity).required('Протеин'),
    fat: Yup.number().min(0).max(quantity).required('Протеин'),
    water: Yup.number().min(0).max(quantity).required('Протеин'),
    dietaryFiber: Yup.number().min(0).max(quantity).required('Протеин'),
  });

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
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
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Введите количество белков: </AppText>
        <InputText
          value={values.protein}
          onChangeText={handleChange('protein')}
          keyboardType="numeric"
          touched={touched.protein}
          onBlur={handleBlur('protein')}
          error={errors.protein}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Введите количество жиров: </AppText>
        <InputText
          value={values.fat}
          onChangeText={handleChange('fat')}
          keyboardType="numeric"
          touched={touched.fat}
          onBlur={handleBlur('fat')}
          error={errors.fat}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>
          Введите количество углеводов:
        </AppText>
        <InputText
          value={values.carbohydrates}
          onChangeText={handleChange('carbohydrates')}
          keyboardType="numeric"
          touched={touched.carbohydrates}
          onBlur={handleBlur('carbohydrates')}
          error={errors.carbohydrates}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>Введите количество воды: </AppText>
        <InputText
          value={values.water}
          onChangeText={handleChange('water')}
          keyboardType="numeric"
          touched={touched.water}
          onBlur={handleBlur('water')}
          error={errors.water}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppText style={styles.inputTitle}>
          Введите количество клетчатки:{' '}
        </AppText>
        <InputText
          value={values.dietaryFiber}
          onChangeText={handleChange('dietaryFiber')}
          keyboardType="numeric"
          touched={touched.dietaryFiber}
          onBlur={handleBlur('dietaryFiber')}
          error={errors.dietaryFiber}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
