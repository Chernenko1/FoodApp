import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch} from '../../../store/hooks';

import {registration} from '../../../services/apis/authAPI';
import {setUser} from '../../../store/slices/userSlice';
import {setAuth, setToken} from '../../../store/slices/authSlice';
import {AppText} from '../../common/AppText';
import {InputText} from '../../common/Inputs/TextInput';
import {COLORS} from '../../../themes/COLORS';
import {Button} from '../../common/Buttons/Button';

type Navigation = NativeStackScreenProps<AuthParamList>;

export const Registration = ({route}: Navigation) => {
  const [error, setError] = useState<string>('');

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Некорректный email')
      .required('Некорректный email'),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*\d).{5,}$/)
      .required(
        'Пароль должен содержать хотя бы одну заглавную букву, цифру и не может быть короче 5 символов',
      ),
  });

  const {handleChange, handleSubmit, values, handleBlur, errors, touched} =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: {email: '', password: ''},
      onSubmit: values => sendReq(),
    });

  function sendReq() {
    registration({
      username,
      email: values.email,
      password: values.password,
      details: route.params,
    })
      .then(data => {
        dispatch(setUser(data.user));
        dispatch(setAuth(true));
        dispatch(setToken(data.token));
      })
      .catch(e => {
        setError(e.response.data.message);
      });
  }

  // console.log(route.params)

  // useEffect(() => {
  //     navigation.setOptions({headerTitle: "Авторизация"})
  // }, [navigation])

  return (
    <View style={styles.mainView}>
      <View style={styles.inputView}>
        <AppText style={styles.titleText}>Логин</AppText>
        <InputText
          value={username}
          style={styles.input}
          onChangeText={text => setUsername(text)}
        />
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
        {errors.password && <AppText>{errors.password}</AppText>}
        <AppText style={{color: COLORS.red}}>{error}</AppText>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          style={{width: '100%'}}
          title="Авторизироваться"
          color={COLORS.orange}
          textColor={COLORS.black}
          onPress={handleSubmit}
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
  inputView: {},
  input: {
    borderBottomWidth: 1,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 20,
  },
});
