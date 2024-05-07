import {useFormik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {useAppDispatch} from '../../../store/hooks';

import {login} from '../../../services/apis/authAPI';
import {setAuth, setToken} from '../../../store/slices/authSlice';
import {setUser} from '../../../store/slices/userSlice';
import {COLORS} from '../../../themes/COLORS';
import {AppText} from '../../common/AppText';
import {Button} from '../../common/Buttons/Button';
import {InputText} from '../../common/Inputs/TextInput';

interface Props {
  handlePress: () => void;
}

export const AuthItems = ({handlePress}: Props) => {
  const dispatch = useAppDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('').required('Неккоректный email'),
  });

  const {handleChange, handleSubmit, values, handleBlur, errors, touched} =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: {email: '', password: ''},
      onSubmit: values => sendReq(),
    });

  function sendReq() {
    login({email: values.email, password: values.password})
      .then(data => {
        dispatch(setUser(data.user));
        dispatch(setAuth(true));
        dispatch(setToken(data.token));
      })
      .catch(e => console.log(e));
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.inputView}>
        <AppText style={styles.titleText}>Почта</AppText>
        <InputText
          value={values.email}
          style={styles.input}
          onChangeText={handleChange('email')}
          keyboardType="email-address"
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
        />
        {errors.email && <AppText>{errors.email}</AppText>}
        <AppText style={styles.titleText}>Пароль</AppText>
        <InputText
          value={values.password}
          style={styles.input}
          onChangeText={handleChange('password')}
          keyboardType="visible-password"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          style={{width: '100%'}}
          title="Зарегистрироваться"
          color={COLORS.orange}
          textColor={COLORS.black}
          onPress={() => handleSubmit()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  inputView: {
    // alignItems: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 20,
  },
});
